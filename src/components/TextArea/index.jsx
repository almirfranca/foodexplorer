import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export const TextArea = ({ value, ...rest }) => {
  return <Container {...rest}>{value}</Container>;
};
