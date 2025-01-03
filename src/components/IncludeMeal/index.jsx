import { useState } from "react";
import { ButtonText } from "../ButtonText";
import { Add, Container, Decrease } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export function IncludeMeal({ mealValue }) {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(Number(mealValue));

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => (prev += 1));

    setValue((prev) => (prev += Number(mealValue)));
  };

  const handleDecreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => (prev -= 1));

    setValue((prev) => (prev -= Number(mealValue)));
  };
  return (
    <Container>
      <div>
        <Decrease onClick={handleDecreaseQuantity}>
          <FiMinus size={18} />
        </Decrease>
        <span>{quantity}</span>

        <Add onClick={handleIncreaseQuantity}>
          <FiPlus size={18} />
        </Add>
      </div>
      <ButtonText title={`Incluir - R$ ${value.toFixed(2)}`} />
    </Container>
  );
}
