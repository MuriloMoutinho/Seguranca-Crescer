import {
  InputWrapper,
  Input,
  Button,
  ErrorMessage,
  Container,
  BackgroundImage,
} from "../../components";
import { useForm, useLoginUser } from "../../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_PATH, MODEL_OBJECT_NOT_EMPTY_FORM } from "../../../constants";
import useGlobalUserLogin from "../../../contexts/user-login.context";
import { useEffect } from "react";

export function LoginScreen() {
  const { login, error } = useLoginUser();
  const navigate = useNavigate();
  const [user] = useGlobalUserLogin();

  const initialDataLogin = {
    username: {...MODEL_OBJECT_NOT_EMPTY_FORM},
    password: {...MODEL_OBJECT_NOT_EMPTY_FORM},
  };

  const { formData, onChangeData, handleSubmit } = useForm({
    initialData: initialDataLogin,
    onSubmit: onSubmitLogin,
  });

  async function onSubmitLogin() {
    await login(formData.username.value, formData.password.value);
  }

  useEffect(() => {
    if (user) {
      navigate(ROUTER_PATH.HOME);
    }
  }, [user, navigate]);

  return (
    <main>
      <Container classNameDefault="center">
        <form onSubmit={handleSubmit} className="formLogin">
          <Container classNameDefault="flexColumn">
            <h1>Faça login</h1>
            <ErrorMessage>{error}</ErrorMessage>

            <InputWrapper textLabel="Email" error={formData.username.error}>
              <Input
                name="username"
                type="text"
                placeholder="Insira seu email aqui"
                onChange={onChangeData}
                value={formData.username.value}
              />
            </InputWrapper>

            <InputWrapper textLabel="Senha" error={formData.password.error}>
              <Input
                name="password"
                type="password"
                placeholder="Insira sua senha aqui"
                onChange={onChangeData}
                value={formData.password.value}
              />
            </InputWrapper>

            <Button>Enviar</Button>
            <Link to={ROUTER_PATH.FORGOT_PASSWORD}>Esqueci minha senha</Link>
            <Link to={ROUTER_PATH.REGISTRAR}>Não possui uma conta? Cadastre-se</Link>
          </Container>
        </form>
      </Container>

      <BackgroundImage image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </main>
  );
}
