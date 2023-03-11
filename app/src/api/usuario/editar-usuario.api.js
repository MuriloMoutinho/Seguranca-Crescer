import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";

export async function editarUsuario(idUsuario, nome, email, senha, imagem) {
  const request = { nome, email };
  if (imagem) {
    request.imagem = imagem;
  }
  if (senha) {
    request.senha = senha;
  }

  const response = await axiosInstance.put(
    API_PATH.USUARIO.BASE + idUsuario,
    request
  );

  return response.data;
}
