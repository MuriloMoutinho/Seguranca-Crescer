import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../constants";
import { Button, Container } from "../../components";

export function NotFound() {
  return (
    <main>
      <Container classNameDefault="center">
        <Container className="flexColumn">
          <h1>Página não encontrada</h1>
          <Link to={ROUTER_PATH.LOGIN}>
            <Button>Clique para voltar</Button>
          </Link>
        </Container>
      </Container>
    </main>
  );
}
