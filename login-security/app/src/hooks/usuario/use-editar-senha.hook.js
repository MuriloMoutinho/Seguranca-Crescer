import { useState } from "react";
import { editarSenha } from "../../api/usuario/editar-senha.api";

export function useEditarSenha() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function putEditarSenha(id, token, senha) {
    try {
      await editarSenha(id, token, senha);
      setError(false);
      setSuccess("Senha editada");
    } catch (error) {
      setSuccess(false);
      setError(error.response.data.message);
    }
  }

  return { error, success, putEditarSenha };
}
