import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Content, Form, HeaderForm, TagField } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { Input } from "../../components/Input";
import { BiUpload } from "react-icons/bi";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";

export const NewMeal = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Refeição");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [mealImageFile, setMealImageFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const handleAddIngredients = () => {
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (ingredientDeleted) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== ingredientDeleted)
    );
  };

  const handleChangeMealImage = (event) => {
    const file = event.target.files[0];

    setMealImageFile(file);
  };

  async function handleNewMeal() {
    if (!title || !type || ingredients.length === 0 || !value)
      alert("Preencha todos os campos obrigatórios!");

    if (newIngredient)
      alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar."
      );

    const response = await api.post("/meal-set", {
      title,
      description,
      type,
      value,
      ingredients,
    });

    if (mealImageFile && response.data.meal_id) {
      const meal_id = response.data.meal_id;

      const fileUploadForm = new FormData();
      fileUploadForm.append("meal_image", mealImageFile);

      await api.patch(`/meal-set/meal_image/${meal_id}`, fileUploadForm);
    }

    alert("Prato cadastrado com sucesso.");
    navigate("/");
  }

  async function handleUpdateMeal() {
    if (!title || !type || ingredients.length === 0 || !value)
      alert("Preencha todos os campos obrigatórios!");

    if (newIngredient)
      alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar."
      );

    const response = await api.put(`/meal-set/${params.id}`, {
      title,
      description,
      type,
      value,
      ingredients,
      mealImageFile,
    });

    const hasUpdatedMealImage =
      typeof mealImageFile === "string" || mealImageFile instanceof String;

    if (!hasUpdatedMealImage && mealImageFile && response.data.id) {
      const meal_id = response.data.id;

      const fileUploadForm = new FormData();
      fileUploadForm.append("meal_image", mealImageFile);

      await api.patch(`/meal-set/meal_image/${meal_id}`, fileUploadForm);
    }

    alert("Prato atualizado com sucesso.");
    navigate("/");
  }

  async function handleDeleteMeal() {
    const confirm = window.confirm(`Deseja realmente deletar: ${title}?`);

    if (confirm) {
      await api.delete(`/meal-set/${params.id}`);
      navigate("/");
    }
  }

  const handleSaveMeal = () => {
    if (params.id) {
      return handleUpdateMeal();
    }

    return handleNewMeal();
  };

  useEffect(() => {
    async function fetchMealById() {
      if (params.id) {
        try {
          const response = await api.get(`/meal-set/${params.id}`);
          const meal = response.data;

          setTitle(meal.title || "");
          setType(meal.type || "Refeição");
          setValue(meal.value || "");
          setDescription(meal.description || "");
          setIngredients(
            meal.ingredients.map((ingredient) => ingredient.name) || []
          );
          setMealImageFile(meal.meal_image);
        } catch (error) {
          console.error("Erro ao buscar prato:", error);
          alert("Não foi possível carregar os dados do prato.");
        }
      }
    }

    fetchMealById();
  }, [params.id]);

  return (
    <Container>
      <Header onOpenMenu={() => setIsOpen(true)} />

      <SideMenu menuIsOpen={isOpen} onClose={setIsOpen} />

      <Content>
        <Form>
          <HeaderForm>
            <a href="/">
              <IoIosArrowBack size={20} />
              voltar
            </a>
            <h1>Adicionar prato</h1>
          </HeaderForm>

          <div id="first-container">
            <div id="first-field">
              <span>Nome</span>
              <Input
                placeholder="Ex: Salada Ceasar"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div id="second-field">
              <label htmlFor="category">
                <span>Categoria</span>
                <div>
                  <select
                    name="category"
                    id="category"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </div>
              </label>
            </div>

            <div id="third-field">
              <span>Imagem do prato</span>
              <label htmlFor="choose-image">
                <BiUpload size={24} />
                <span>Selecione uma imagem</span>
                <input
                  type="file"
                  id="choose-image"
                  onChange={handleChangeMealImage}
                />
              </label>
            </div>
          </div>

          <div id="second-container">
            <div id="first-field">
              <span>Ingredientes</span>
              <TagField>
                {ingredients.map((ingredient, index) => (
                  <NewTag
                    key={index}
                    value={ingredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <NewTag
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </TagField>
            </div>
            <div id="second-field">
              <span>Preço</span>
              <Input
                placeholder="R$ 00,00"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>

          <div id="third-container">
            <span>Descrição</span>
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div id="fourth-container">
            <div>
              {params.id && (
                <Button
                  id="first-button"
                  title="Excluir prato"
                  onClick={handleDeleteMeal}
                />
              )}
              <Button
                id="second-button"
                title="Salvar alterações"
                onClick={handleSaveMeal}
              />
            </div>
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};
