export const API_URL = "http://localhost:3000";

export const API_PATH = {
  AUTH: {
    BASE: "/auth/",
    LOGIN: "/auth/login",
    REGISTRAR: "/auth/registrar",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/resetar-senha",
    EDIT_PASSWORD: "/auth/editar-senha?token="
  },
  USUARIO: {
    BASE: "/usuarios/",
    ME: "/usuarios/me",
  },
};
