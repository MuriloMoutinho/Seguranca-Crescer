import useGlobalUserLogin from "../../../../../contexts/user-login.context";
import { useEditarUsuario, useForm } from "../../../../../hooks";
import {
  Button,
  InputWrapper,
  ErrorMessage,
  SuccessMessage,
  Container,
  Input,
} from "../../../../components";
import "./modal-editar-perfil.styles.css";
import {
  MODEL_OBJECT_NOT_EMPTY_FORM,
  MODEL_OBJECT_EMPTY_FORM,
} from "../../../../../constants";

export function ModalEditarPerfil({ onClickClose, onClickSubmit }) {
  const [user] = useGlobalUserLogin();
  const { error, success, putEditarUsuario } = useEditarUsuario();

  const initialDataRate = {
    nome: { ...MODEL_OBJECT_NOT_EMPTY_FORM, value: user.nome },
    imagem: { ...MODEL_OBJECT_EMPTY_FORM, value: user.imagem },
    email: { ...MODEL_OBJECT_NOT_EMPTY_FORM, value: user.email },
    senha: { ...MODEL_OBJECT_EMPTY_FORM },
  };

  async function onSubmitRate() {
    await putEditarUsuario(
      user.id,
      formData.nome.value,
      formData.email.value,
      formData.senha.value,
      formData.imagem.value
    );
    onClickSubmit();
  }

  const { onChangeData, handleSubmit, formData } = useForm({
    initialData: initialDataRate,
    onSubmit: onSubmitRate,
  });

  return (
    <>
      <div className="fade"></div>
      <div className="rateModal">
        <div className="rateModal__bar">
          <h3>Editar perfil</h3>

          <Button className="invertedColor" onClick={onClickClose}>
            X
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="rateModal__form">
          <Container className="containerFlexColumn">
            <ErrorMessage>{error}</ErrorMessage>
            <SuccessMessage>{success}</SuccessMessage>

            <InputWrapper textLabel="Nome" error={formData.nome.error}>
              <Input
                name="nome"
                placeholder="Insira o nome aqui..."
                type="text"
                onChange={onChangeData}
                value={formData.nome.value}
              />
            </InputWrapper>

            <InputWrapper
              textLabel="Imagem perfil"
              error={formData.imagem.error}
            >
              <Input
                name="imagem"
                placeholder="Insira o imagem perfil aqui..."
                type="text"
                onChange={onChangeData}
                value={formData.imagem.value}
              />
            </InputWrapper>

            <InputWrapper textLabel="senha" error={formData.senha.error}>
              <Input
                name="senha"
                placeholder="Insira o senha aqui..."
                type="password"
                onChange={onChangeData}
                value={formData.senha.value}
              />
            </InputWrapper>

            <InputWrapper textLabel="email" error={formData.email.error}>
              <Input
                name="email"
                placeholder="Insira o email aqui..."
                type="email"
                onChange={onChangeData}
                value={formData.email.value}
              />
            </InputWrapper>

            <Button className="fullWidth">Editar</Button>
          </Container>
        </form>
      </div>
    </>
  );
}
