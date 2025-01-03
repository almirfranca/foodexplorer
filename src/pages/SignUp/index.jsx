import { Container, Form, LogoSignUp } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BsFillHexagonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) return alert("Preencha todos os campos!");

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o usuário.");
        }
      });
  };

  return (
    <Container>
      <LogoSignUp>
        <BsFillHexagonFill size={40} />
        <div>
          <h1>food explorer</h1>
        </div>
      </LogoSignUp>

      <Form>
        <h1>Crie sua conta</h1>

        <div id="logoSmallS">
          <BsFillHexagonFill size={40} />
          <div id="divFood">
            <h1>food explorer</h1>
          </div>
        </div>

        <div>
          <span>Seu nome</span>
          <Input
            placeholder={"Ex: Maria da Silva"}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <span>Email</span>
          <Input
            placeholder={"exemplo@exemplo.com.br"}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <span>Senha</span>
          <Input
            placeholder={"No mínimo 6 caracteres"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link id="link" to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  );
};
