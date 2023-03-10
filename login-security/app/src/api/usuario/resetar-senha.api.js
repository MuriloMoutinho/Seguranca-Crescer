import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants/index";

export async function resetarSenha(email) {
  await axiosInstance.post(API_PATH.AUTH.BASE + email + API_PATH.AUTH.FORGOT_PASSWORD);

}
