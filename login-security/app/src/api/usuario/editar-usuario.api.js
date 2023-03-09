import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";

export async function editarUsuario(idUsuario, nome, email, senha, imagem) {
  const response = await axiosInstance.put(
    API_PATH.USUARIO.BASE + idUsuario + API_PATH.USUARIO.EDITAR,
    { nome, email, senha, imagem }
  );

  return response.data;
}
