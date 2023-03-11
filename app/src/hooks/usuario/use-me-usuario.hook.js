import { useEffect, useState } from "react";
import { meUsuario } from "../../api/usuario/me-usuario.api";
import useGlobalUserLogin from "../../contexts/user-login.context";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../constants";

export function useMeUsuario() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [, setUserLogin] = useGlobalUserLogin();

  async function getMeUsuario() {
    try {
      const response = await meUsuario();
      setData(response);
    } catch (error) {
      if (error.response.status === 401) {
        setUserLogin(null);
        navigate(ROUTER_PATH.LOGIN);
      } else {
        setError(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMeUsuario();
  }, []);

  async function refreshMeUsuario() {
    await getMeUsuario();
  }

  return { refreshMeUsuario, data, loading, error };
}
