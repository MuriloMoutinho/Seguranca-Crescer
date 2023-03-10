import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants/index";

export async function validarToken(id, token) {
  const response = await axiosInstance.get(API_PATH.AUTH.BASE + id + API_PATH.AUTH.VALIDATE_TOKEN + token);

  return response.data;
}
