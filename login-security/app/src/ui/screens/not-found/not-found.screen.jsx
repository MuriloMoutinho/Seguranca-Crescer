import { Link } from "react-router-dom";
import { Button, Container } from "../../components";

export function NotFound() {
  return (
    <main>
      <Container classNameDefault="center">
        <Container className="flexColumn">
          <h1>Página não encontrada</h1>
          <Link to="/">
            <Button>Clique para voltar</Button>
          </Link>
        </Container>
      </Container>
    </main>
  );
}
