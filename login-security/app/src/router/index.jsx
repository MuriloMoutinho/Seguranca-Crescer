import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATH } from "../constants";
import {
  LoginScreen,
  NotFound,
  RegistrarScreen,
  PerfilScreen,
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
    path: ROUTER_PATH.HOME,
    element: <PrivateRoute Screen={PerfilScreen} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
