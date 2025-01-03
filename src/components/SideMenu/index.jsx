import { CiSearch } from "react-icons/ci";
import { Input } from "../Input";
import { Container, Header, Content } from "./styles";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";

// eslint-disable-next-line react/prop-types
export const SideMenu = ({ menuIsOpen, onClose, setSearch }) => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user.role === USER_ROLE.ADMIN;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <div>
          <button onClick={() => onClose(false)}>
            <IoClose size={30} />
          </button>
          <span>Menu</span>
        </div>
      </Header>
      <Content>
        <div>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={CiSearch}
            onChange={(e) => setSearch(e.target.value)}
          ></Input>

          <div id="buttons">
            {isAdmin && <Link to="/new-meal">Novo Prato</Link>}
            <button onClick={handleSignOut}>
              <span>Sair</span>
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};
