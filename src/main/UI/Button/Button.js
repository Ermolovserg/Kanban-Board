import styles from "./Button.module.css";

const Button = ({ type, appearance, disabled, onClick, children }) => {
  const classNames = [styles.Button];

  if (appearance) {
    classNames.push(styles[appearance]);
  }

  return (
    <button
      type={type || "button"}
      className={classNames.join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
