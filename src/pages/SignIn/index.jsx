import { Container, Form, LogoSignIn } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BsFillHexagonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <LogoSignIn>
        <BsFillHexagonFill size={40} />
        <div>
          <h1>food explorer</h1>
        </div>
      </LogoSignIn>

      <Form>
        <h1>Faça login</h1>

        <div id="logoSmallS">
          <BsFillHexagonFill size={40} />
          <div id="divFood">
            <h1>food explorer</h1>
          </div>
        </div>

        <div>
          <span>Email</span>
          <Input
            placeholder="Digite o seu e-mail..."
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <span>Senha</span>
          <Input
            placeholder="Digite a sua senha..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link id="link" to="register">
          Criar conta
        </Link>
      </Form>
    </Container>
  );
};
