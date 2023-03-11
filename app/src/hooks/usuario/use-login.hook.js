import { useState } from "react";
import useGlobalUserLogin from "../../contexts/user-login.context";
import { loginUser } from "../../api/usuario/login-user.api";

export function useLoginUser() {
  const [error, setError] = useState();
  const [, setUserLogin] = useGlobalUserLogin();

  async function login(username, password) {
    try {
      const user = await loginUser(username, password);

      setUserLogin(user);
    } catch (error) {
      setError("Usuário ou senha incorreta");
    }
  }

  return { login, error };
}
