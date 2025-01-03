import { Container, Logo, SignOut, Search } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";
import { PiSignOut, PiReceiptLight, PiReceiptBold } from "react-icons/pi";
import { ButtonText } from "../ButtonText";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { USER_ROLE } from "../../utils/roles";

// eslint-disable-next-line react/prop-types
export function Header({ children, onOpenMenu }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user.role === USER_ROLE.ADMIN;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <div id="headerGreatScreen">
        <Logo>
          <div>
            <BsFillHexagonFill size={30} />
            <span id="titleFoodExplorer">food explorer</span>
          </div>
          {isAdmin && <span id="isAdmin">admin</span>}
        </Logo>

        <Search>{children}</Search>

        {isAdmin ? (
          <Link to="/new-meal">Novo Prato</Link>
        ) : (
          <ButtonText
            title="Pedidos(0)"
            position="left"
            icon={PiReceiptLight}
          />
        )}

        <SignOut onClick={handleSignOut}>
          <PiSignOut size={28} />
        </SignOut>
      </div>

      <div id="headerSmallScreen">
        <button id="barsButton" onClick={onOpenMenu}>
          <FaBars size={28} />
        </button>

        <div id="logoFoodExplorer">
          <BsFillHexagonFill size={30} />
          <div id="tittleFoodExplorer">
            <span>food explorer</span>
          </div>
          {isAdmin && <span id="spanAdmin">admin</span>}
        </div>

        {!isAdmin && (
          <div id="orders">
            <PiReceiptBold size={30} />
            <span>0</span>
          </div>
        )}
      </div>
    </Container>
  );
}
