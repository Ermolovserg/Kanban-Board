import styles from "./Input.module.css";

const Input = ({ type, name, value, placeholder, onChange, onKeyUp }) => {
  return (
    <input
      className={styles.Input}
      type={type || "text"}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
    />
  );
};

export default Input;
