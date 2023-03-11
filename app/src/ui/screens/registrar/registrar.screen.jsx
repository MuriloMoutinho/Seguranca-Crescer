import {
  InputWrapper,
  Input,
  Button,
  ErrorMessage,
  Container,
  BackgroundImage,
} from "../../components";
import { useForm, useRegistrar } from "../../../hooks";
import {
  ROUTER_PATH,
  MODEL_OBJECT_EMPTY_FORM,
  MODEL_OBJECT_NOT_EMPTY_FORM,
} from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import useGlobalUserLogin from "../../../contexts/user-login.context";
import { useEffect } from "react";

export function RegistrarScreen() {
  const [user] = useGlobalUserLogin();
  const { postRegistrar, error } = useRegistrar();
  const navigate = useNavigate();


  const initialDataForm = {
    nome: { ...MODEL_OBJECT_NOT_EMPTY_FORM },
    email: { ...MODEL_OBJECT_NOT_EMPTY_FORM },
    senha: { ...MODEL_OBJECT_NOT_EMPTY_FORM },
    imagem: { ...MODEL_OBJECT_EMPTY_FORM },
  };

  async function onSubmitForm() {
    await postRegistrar(
      formData.nome.value,
      formData.email.value,
      formData.senha.value,
      formData.imagem.value,
    );
  }

  const { formData, onChangeData, handleSubmit } = useForm({
    initialData: initialDataForm,
    onSubmit: onSubmitForm,
  });

  useEffect(() => {
    if (user) {
      navigate(ROUTER_PATH.HOME);
    }
  }, [user, navigate]);

  return (
    <main>
      <Container classNameDefault="flexColumnCenter paddingDefault">
        <form onSubmit={handleSubmit} className="formLogin">
          <Container className="flexColumn">
            <h1>Registrar-se</h1>
            <ErrorMessage>{error}</ErrorMessage>

            <InputWrapper
              textLabel="Nome completo"
              error={formData.nome.error}
            >
              <Input
                name="nome"
                type="text"
                placeholder="Insira seu nome aqui"
                onChange={onChangeData}
                value={formData.nome.value}
              />
            </InputWrapper>

            <InputWrapper textLabel="Email" error={formData.email.error}>
              <Input
                name="email"
                type="email"
                placeholder="Insira seu email aqui"
                onChange={onChangeData}
                value={formData.email.value}
              />
            </InputWrapper>

            <InputWrapper textLabel="Senha" error={formData.senha.error}>
              <Input
                name="senha"
                type="password"
                placeholder="Insira sua senha aqui"
                onChange={onChangeData}
                value={formData.senha.value}
              />
            </InputWrapper>

            <InputWrapper
              textLabel="Imagem (opcional)"
              error={formData.imagem.error}
            >
              <Input
                name="imagem"
                type="text"
                placeholder="Insira o URL imagem aqui"
                onChange={onChangeData}
                value={formData.imagem.value}
              />
            </InputWrapper>


            <Button>Enviar</Button>
            <Link to={ROUTER_PATH.LOGIN}>Voltar para o login</Link>
          </Container>
        </form>
      </Container>
      <BackgroundImage image="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </main>
  );
}
