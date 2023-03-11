import "./loading-message.styles.css";

export function LoadingMessage({ children }) {
  return children && <p className="loadingMessage">{children}</p>;
}
