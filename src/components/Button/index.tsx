import React from "react";
import { Container } from "./styles";

export function Button({ children, title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {children}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
