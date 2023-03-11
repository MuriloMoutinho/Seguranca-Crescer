import { axiosInstance } from "../_base/axios-instance";
import { API_PATH } from "../../constants/index";

export async function logoutUser(){
    await axiosInstance.post(API_PATH.AUTH.LOGOUT)
    
}