import "./styles.js";
import { Container, Content, MealImage, MealDescription } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
// import { Input } from "../../components/Input/index.jsx";
// import { CiSearch } from "react-icons/ci";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { IncludeMeal } from "../../components/IncludeMeal/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { useAuth } from "../../hooks/auth.jsx";
import { USER_ROLE } from "../../utils/roles.js";
import { Button } from "../../components/Button";

function MealDetails() {
  const [data, setData] = useState(null);
  const [mealImage, setMealImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const isAdmin = user.role === USER_ROLE.ADMIN;

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meal-set/${params.id}`);
      setData(response.data);

      const imageURL = `${api.defaults.baseURL}/meal_image/${response.data.meal_image}`;
      setMealImage(imageURL);
    }
    fetchMeal();
  }, [params.id]);

  return (
    <Container>
      <Header onOpenMenu={() => setIsOpen(true)} />

      <SideMenu menuIsOpen={isOpen} onClose={setIsOpen} />

      {data && (
        <main>
          <Content>
            <ButtonText
              title="voltar"
              icon={IoIosArrowBack}
              onClick={() => navigate(-1)}
            ></ButtonText>

            <div>
              <MealImage>
                <img src={mealImage} alt="Foto da refeição" />
              </MealImage>

              <MealDescription>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <div id="ingredients">
                  {data.ingredients.map((ingredient) => (
                    <div key={ingredient.id.toString()}>
                      <Tag title={ingredient.name}></Tag>
                    </div>
                  ))}
                </div>
                {isAdmin ? (
                  <Button
                    id="editButton"
                    title="Editar prato"
                    onClick={() => navigate(`/new-meal/${data.id}`)}
                  />
                ) : (
                  <IncludeMeal mealValue={Number(data.value)} />
                )}
              </MealDescription>
            </div>
          </Content>
        </main>
      )}
      <Footer />
    </Container>
  );
}

export { MealDetails };
