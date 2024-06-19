import styles from "./Header.module.css";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <header className={styles.Header}>
      <span className={styles.HeaderText}>Awesome Kanban Board</span>
      <Profile />
    </header>
  );
};
export default Header;
