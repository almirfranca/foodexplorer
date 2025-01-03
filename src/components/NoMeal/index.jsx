import { Container } from "./style";
import imageNoMeal from "../../assets/115045792-linha-fina-talheres-e-prato-ícone-vector.jpg";

export function NoMeal() {
  return (
    <Container>
      <img src={imageNoMeal} alt="Foto ilustrativa de um prato vazio" />
      <p>Nenhuma refeição cadastrada</p>
    </Container>
  );
}
