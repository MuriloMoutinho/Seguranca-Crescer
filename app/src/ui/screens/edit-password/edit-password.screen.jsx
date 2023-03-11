import {
  InputWrapper,
  Input,
  Button,
  ErrorMessage,
  Container,
  BackgroundImage,
  SuccessMessage,
} from "../../components";
import { useForm, useEditarSenha } from "../../../hooks";
import { Link, useLocation } from "react-router-dom";
import { ROUTER_PATH, MODEL_OBJECT_NOT_EMPTY_FORM } from "../../../constants";

export function EditPasswordScreen() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const { putEditarSenha, success, error } = useEditarSenha();

  const initialDataForm = {
    senha: { ...MODEL_OBJECT_NOT_EMPTY_FORM },
  };

  const { formData, onChangeData, handleSubmit } = useForm({
    initialData: initialDataForm,
    onSubmit: onSubmitLogin,
  });

  async function onSubmitLogin() {
    await putEditarSenha(token, formData.senha.value);
  }

  return (
    <main>
      <Container classNameDefault="center">
        <form onSubmit={handleSubmit} className="formLogin">
          <Container classNameDefault="flexColumn">
            <h1>Insira sua nova senha</h1>
            <ErrorMessage>{error}</ErrorMessage>
            <SuccessMessage>{success}</SuccessMessage>

            <InputWrapper textLabel="senha" error={formData.senha.error}>
              <Input
                name="senha"
                type="text"
                placeholder="Insira seu senha aqui"
                onChange={onChangeData}
                value={formData.senha.value}
              />
            </InputWrapper>

            <Button>Enviar</Button>
            <Link to={ROUTER_PATH.LOGIN}>
              <Button>Clique para voltar</Button>
            </Link>
          </Container>
        </form>
      </Container>

      <BackgroundImage image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </main>
  );
}
