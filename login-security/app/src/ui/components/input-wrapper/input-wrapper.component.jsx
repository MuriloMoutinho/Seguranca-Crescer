import "./input-wrapper.styles.css";
import { ErrorMessage } from "../index";

export function InputWrapper({ children, className, textLabel, error }) {
  const fullClassName = className ? `label ${className}` : "label";

  return (
    <label className={fullClassName}>
      {textLabel}
      {children}
      <ErrorMessage>{error}</ErrorMessage>
    </label>
  );
}
