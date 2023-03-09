import css from "./background-image.module.css";

export function BackgroundImage({ image }) {
  return (
    <div className={css.background}>
      <img
        className={css.background__image}
        draggable="false"
        src={image}
        alt="Background"
      />
    </div>
  );
}
