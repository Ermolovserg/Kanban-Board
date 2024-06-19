import { useContext } from "react";
import { AppContext } from "../../context";
import styles from "./Board.module.css";
import Category from "../../main/Category/Category";

const Board = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={styles.Board}>
      {state.map((category) => {
        return <Category key={category.status} {...category} />;
      })}
    </div>
  );
};

export default Board;
