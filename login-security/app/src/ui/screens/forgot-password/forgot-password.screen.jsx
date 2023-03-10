import {
  InputWrapper,
  Input,
  Button,
  ErrorMessage,
  Container,
  BackgroundImage,
  SuccessMessage,
} from "../../components";
import { useForm, useResetarSenha } from "../../../hooks";
import { Link } from "react-router-dom";
import { ROUTER_PATH, MODEL_OBJECT_NOT_EMPTY_FORM } from "../../../constants";

export function ForgotPasswordScreen() {
  const { postResetarSenha, success, error } = useResetarSenha();

  const initialDataForm = {
    email: { ...MODEL_OBJECT_NOT_EMPTY_FORM },
  };

  const { formData, onChangeData, handleSubmit } = useForm({
    initialData: initialDataForm,
    onSubmit: onSubmitLogin,
  });

  async function onSubmitLogin() {
    await postResetarSenha(formData.email.value);
  }

  return (
    <main>
      <Container classNameDefault="center">
        <form onSubmit={handleSubmit} className="formLogin">
          <Container classNameDefault="flexColumn">
            <h1>Insira seu email</h1>
            <ErrorMessage>{error}</ErrorMessage>
            <SuccessMessage>{success}</SuccessMessage>

            <InputWrapper textLabel="email" error={formData.email.error}>
              <Input
                name="email"
                type="email"
                placeholder="Insira seu email aqui"
                onChange={onChangeData}
                value={formData.email.value}
              />
            </InputWrapper>

            <Button>Enviar</Button>
            <Link to={ROUTER_PATH.LOGIN}>Logar</Link>
          </Container>
        </form>
      </Container>

      <BackgroundImage image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </main>
  );
}
