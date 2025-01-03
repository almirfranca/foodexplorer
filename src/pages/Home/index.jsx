import { Container, Content, LogoGrains } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CiSearch } from "react-icons/ci";
import { Footer } from "../../components/Footer";
import { NoMeal } from "../../components/NoMeal";
import grainsImage from "../../assets/grains.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

import { MealCard } from "../../components/MealCard";
import { Section } from "../../components/Section";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const [search, setSearch] = useState("");
  const [mainMeal, setMainMeal] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get("/ingredients");
      setIngredients(response.data);
    }
    fetchIngredients();
  }, []);

  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get(`/meal-set?title=${search}`);
      const meals = response.data;

      setMainMeal(meals.filter((meal) => meal.type === "Refeição"));
      setDesserts(meals.filter((meal) => meal.type === "Sobremesa"));
      setDrinks(meals.filter((meal) => meal.type === "Bebida"));
    }

    fetchMeals();
  }, [ingredients, search]);

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)}>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={CiSearch}
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
      </Header>

      <SideMenu
        menuIsOpen={menuIsOpen}
        onClose={setMenuIsOpen}
        setSearch={setSearch}
      />

      <main>
        <LogoGrains>
          <img src={grainsImage} alt="Foto de grãos" />

          <div>
            <div id="title">
              <h1 id="taste">Sabores inigualáveis</h1>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
        </LogoGrains>

        <Content>
          <Section>
            <h2>Refeições</h2>
            {mainMeal.length === 0 ? (
              <NoMeal />
            ) : (
              <Splide
                options={{
                  fixedWidth: "max-content",
                  gap: "2rem",
                  rewind: false,
                  pagination: false,
                  perPage: 1,
                }}
                aria-label="dish carousel"
              >
                {mainMeal.map((dish) => (
                  <SplideSlide key={dish.id}>
                    <MealCard data={dish} />
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </Section>

          <Section>
            <h2>Sobremesas</h2>
            {desserts.length === 0 ? (
              <NoMeal />
            ) : (
              <Splide
                options={{
                  fixedWidth: "fit-content",
                  gap: "2rem",
                  rewind: false,
                  pagination: false,
                  perPage: 1,
                }}
                aria-label="dish carousel"
              >
                {desserts.map((dessert) => (
                  <SplideSlide key={dessert.id}>
                    <MealCard data={dessert} />
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </Section>
          <Section>
            <h2>Bebidas</h2>
            {drinks.length === 0 ? (
              <NoMeal />
            ) : (
              <Splide
                options={{
                  fixedWidth: "fit-content",
                  gap: "2rem",
                  rewind: false,
                  pagination: false,
                  perPage: 1,
                }}
                aria-label="dish carousel"
              >
                {drinks.map((drink) => (
                  <SplideSlide key={drink.id}>
                    <MealCard data={drink} />
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
