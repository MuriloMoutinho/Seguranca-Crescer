import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";

export async function editarSenha(token, senha) {
  const response = await axiosInstance.put(
    API_PATH.AUTH.EDIT_PASSWORD + token,
    { senha }
  );

  return response.data;
}
