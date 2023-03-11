import { useState } from "react";
import {
  useMeUsuario,
} from "../../../hooks";
import {
  ErrorMessage,
  LoadingMessage,
  CardPerfilUsuario,
  Button,
  Header,
  Container,
  BackgroundImage,
} from "../../components";
import { ModalEditarPerfil } from "./sections/modal-editar-perfil/modal-editar-perfil.component";

export function PerfilScreen() {
  const usuario = useMeUsuario();
  const [modalEdit, setModalEdit] = useState();

  function handleModalEdit() {
    setModalEdit((oldModalEdit) => !oldModalEdit);
  }

  function renderUsuario() {
    if (usuario.loading)
      return <LoadingMessage>Carregando perfil</LoadingMessage>;
    if (usuario.error) return <ErrorMessage>{usuario.error}</ErrorMessage>;

    return (
      <>
        <CardPerfilUsuario
          nome={usuario.data.nome}
          imagem={usuario.data.imagem}
          email={usuario.data.email}
          criado_em={usuario.data.criado_em}
        />
        <Button onClick={handleModalEdit}>Editar perfil</Button>

        </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Container className="flexColumnCenter paddingDefault">{renderUsuario()}</Container>
        {modalEdit && (
          <ModalEditarPerfil
            onClickClose={handleModalEdit}
            onClickSubmit={usuario.refreshMeUsuario}
          />
        )}
        <BackgroundImage image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </main>
    </>
  );
}
