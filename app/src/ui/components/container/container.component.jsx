import "./container.styles.css";

export function Container({ children, classNameDefault, className }) {
  let fullClassName;

  if (classNameDefault) {
    fullClassName = `container ${classNameDefault}`;
  } else if (className) {
    fullClassName = `${className}`;
  } else {
    fullClassName = "container";
  }

  return <div className={fullClassName}>{children}</div>;
}
