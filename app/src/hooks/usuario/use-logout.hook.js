import useGlobalUserLogin from "../../contexts/user-login.context";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/usuario/logout-user.api";
import { ROUTER_PATH } from "../../constants";

export function useLogout() {
  const navigate = useNavigate();
  const [, setUserLogin] = useGlobalUserLogin();

  async function logout() {
      await logoutUser();

      setUserLogin(null);
      navigate(ROUTER_PATH.LOGIN);
  }

  return { logout };
}
