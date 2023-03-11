import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants/index";

export async function registrarUser(nome, email, senha, imagem) {
  const response = await axiosInstance.post(API_PATH.AUTH.REGISTRAR, {
    nome,
    email,
    senha,
    imagem,
  });

  return response.data;
}
