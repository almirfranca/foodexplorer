import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, icon: Icon, position = "left", ...rest }) {
  return (
    <Container type="button" {...rest}>
      {position === "left" && Icon && <Icon size={24} />}
      {title}
      {position === "right" && Icon && <Icon size={24} />}
    </Container>
  );
}
