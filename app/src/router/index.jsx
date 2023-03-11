import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "../constants";
import {
  LoginScreen,
  NotFound,
  RegistrarScreen,
  PerfilScreen,
  ForgotPasswordScreen,
  EditPasswordScreen
} from "../ui/screens/index";
import { PrivateRoute } from "./private-route.component";

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.LOGIN,
    element: <LoginScreen />,
  },
  {
    path: ROUTER_PATH.REGISTRAR,
    element: <RegistrarScreen />,
  },
  {
    path: ROUTER_PATH.FORGOT_PASSWORD,
    element: <ForgotPasswordScreen />,
  },
  {
    path: ROUTER_PATH.EDIT_PASSWORD,
    element: <EditPasswordScreen />,
  },
  {
    path: ROUTER_PATH.HOME,
    element: <PrivateRoute Screen={PerfilScreen} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
