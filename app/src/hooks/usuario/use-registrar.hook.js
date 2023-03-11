import { useState } from "react";
import useGlobalUserLogin from "../../contexts/user-login.context";
import { registrarUser } from "../../api/usuario/registrar-user.api";

export function useRegistrar() {
  const [error, setError] = useState(false);
  const [, setUserLogin] = useGlobalUserLogin();

  async function postRegistrar(
    nomeCompleto,
    dataNascimento,
    email,
    senha,
    imagemPerfil,
    apelido
  ) {
    try {
      const user = await registrarUser(
        nomeCompleto,
        dataNascimento,
        email,
        senha,
        imagemPerfil,
        apelido
      );

      setUserLogin(user);
    } catch (error) {
      setError("Ocorreu um erro ao registrar o usuario");
    }
  }

  return { error, postRegistrar };
}
