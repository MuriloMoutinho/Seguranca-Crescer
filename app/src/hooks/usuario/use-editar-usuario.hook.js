import { useState } from "react";
import { editarUsuario } from "../../api/usuario/editar-usuario.api";

export function useEditarUsuario() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function putEditarUsuario(
    idUsuario,
    nome,
    email,
    senha,
    imagem
  ) {
    try {

      await editarUsuario(idUsuario, nome, email, senha, imagem );
      setError(false);
      setSuccess("Perfil editado");
    } catch (error) {
      setSuccess(false);
      setError(error.response.data.message);
    }
  }

  return { error, success, putEditarUsuario };
}
