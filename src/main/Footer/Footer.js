import styles from "./Footer.module.css";
import { useContext } from "react";
import { AppContext } from "../../context";

const Footer = () => {
  const { state } = useContext(AppContext);
  const activeTasksLength = state[0].tasks.length;
  const finishedTasksLength = state[3].tasks.length;

  return (
    <footer className={styles.Footer}>
      <div className={styles.stats}>
        <span>Active tasks: {activeTasksLength}</span>
        <span>Finished tasks: {finishedTasksLength}</span>
      </div>
      <div>
        Kanban Board by / Sergey, 2024
      </div>
    </footer>
  );
};

export default Footer;
