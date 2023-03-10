import { useState } from "react";
import { resetarSenha } from "../../api/usuario/resetar-senha.api";

export function useResetarSenha() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  async function postResetarSenha(email) {
    try {
      await resetarSenha(email);

      setError(false)
      setSuccess("Foi enviado um email para você, entre no link enviado")
    } catch (error) {
      setSuccess(false)
      setError(error.response.data.message);
    }
  }

  return { error, success, postResetarSenha };
}
