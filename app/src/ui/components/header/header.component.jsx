import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../constants";
import { useLogout } from "../../../hooks";
import { Button } from "../button/button.component";
import { Container } from "../container/container.component";
import "./header.styles.css";

export function Header() {
  const { logout } = useLogout();

  return (
    <header className="header">
      <Container className="header__container">
        <Link to={ROUTER_PATH.HOME} className="header_logo">
          <h1>Login</h1>
        </Link>

        <nav className="header__nav">
          <Link to={ROUTER_PATH.PERFIL}>Perfil</Link>
          <Button className="logout_button" onClick={logout}>
            Sair
          </Button>
        </nav>
      </Container>
    </header>
  );
}
