import { useEffect } from "react";
import { validarToken } from "../../api/usuario/validar-token.api";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../constants";

export function useValidarToken(id, token) {
  const navigate = useNavigate();

  useEffect(() => {
    async function getValidarToken() {
      try {
        await validarToken(id, token);
        
      } catch (error) {
        
        navigate(ROUTER_PATH.LOGIN)
      } 
    }

    getValidarToken();
  }, []);
}
