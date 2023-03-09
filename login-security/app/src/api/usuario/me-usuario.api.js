import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants";

export async function meUsuario() {
  const response = await axiosInstance.get(API_PATH.USUARIO.ME);

  return response.data;
}
