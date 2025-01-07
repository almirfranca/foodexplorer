/* eslint-disable react/prop-types */
import { Container, Include } from "./styles";
// import { CiHeart } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Add, Decrease } from "../IncludeMeal/styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../Button";
import { api } from "../../services/api";
import imagePlaceHolder from "../../assets/115045792-linha-fina-talheres-e-prato-ícone-vector.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { CiHeart } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
export function MealCard({ data, ...rest }) {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(Number(data.value));

  const { user } = useAuth();
  const isAdmin = user.role === USER_ROLE.ADMIN;

  const imageDishURL = data.meal_image
    ? `${api.defaults.baseURL}/meal_image/${data.meal_image}`
    : imagePlaceHolder;

  const navigate = useNavigate();

  const handleMealDetails = (id) => {
    navigate(`/meal-details/${id}`);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => (prev += 1));

    setValue((prev) => (prev += Number(data.value)));
  };

  const handleDecreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => (prev -= 1));

    setValue((prev) => (prev -= Number(data.value)));
  };

  return (
    <Container {...rest}>
      <div>
        {isAdmin ? (
          <button onClick={() => navigate(`/new-meal/${data.id}`)}>
            <MdEdit size={20} />
          </button>
        ) : (
          <button>
            <CiHeart size={20} />
          </button>
        )}

        <img src={imageDishURL} alt="Foto da Refeição" />

        <button onClick={() => handleMealDetails(data.id)}>
          <span>{data.title}</span>
          <IoIosArrowForward />
        </button>

        <p>{data.description}</p>

        <span>{`R$ ${value.toFixed(2)}`}</span>

        {!isAdmin && (
          <Include>
            <div>
              <Decrease onClick={handleDecreaseQuantity}>
                <FiMinus size={18} />
              </Decrease>
              <span>{quantity}</span>
              <Add onClick={handleIncreaseQuantity}>
                <FiPlus size={18} />
              </Add>
            </div>
            <div>
              <Button title="Incluir" />
            </div>
          </Include>
        )}
      </div>
    </Container>
  );
}
