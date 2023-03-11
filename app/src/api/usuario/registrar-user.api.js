import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants/index";

export async function registrarUser(nome, email, senha, imagem) {
  const request = { nome, email, senha };
  if (imagem) {
    request.imagem = imagem;
  }

  const response = await axiosInstance.post(API_PATH.AUTH.REGISTRAR, {
    request,
  });

  return response.data;
}
