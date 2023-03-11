import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants/index";

export async function loginUser(username, password) {
  const response = await axiosInstance.post(
    API_PATH.AUTH.LOGIN,
    {},
    {
      auth: {
        username,
        password,
      },
    }
  );

  return response.data;
}
