import "./success-message.styles.css";

export function SuccessMessage({ children }) {
  return children && <p className="successMessage">{children}</p>;
}
