import "./card-perfil-usuario.styles.css";
import { userDefault } from "../../../assets/images";

export function CardPerfilUsuario({ nome, imagem, email, criado_em }) {
  return (
    <div className="cardPerfilUsuario">
      <div>
        <img src={imagem} className="cardPerfilUsuario__image" alt="Perfil" />
        <h2>{nome}</h2>
        <p>{email}</p>
        <p>Criado em: {criado_em}</p>
      </div>
    </div>
  );
}

CardPerfilUsuario.defaultProps = {
  imagemPerfil: userDefault,
};
