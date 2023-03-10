export const API_URL = "http://localhost:3000";

export const API_PATH = {
  AUTH: {
    BASE: "/auth/",
    LOGIN: "/auth/login",
    REGISTRAR: "/auth/registrar",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/resetar-senha",
    VALIDATE_TOKEN: "/validar-token/",
    EDIT_PASSWORD: "/editar-senha/"
  },
  USUARIO: {
    BASE: "/usuarios/",
    EDITAR: "/editar",
    ME: "/usuarios/me",
  },
};
