import { Container, CopyRight, LogoFooter } from "./style";
import { BsFillHexagonFill } from "react-icons/bs";
import { PiCopyrightThin } from "react-icons/pi";

export function Footer() {
  return (
    <Container>
      <LogoFooter>
        <BsFillHexagonFill size={20} />
        <span>food explorer</span>
      </LogoFooter>

      <CopyRight>
        <PiCopyrightThin size={20} />
        <span> 2023 - Todos os direitos reservados.</span>
      </CopyRight>
    </Container>
  );
}
