import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import styles from "./TasksList.module.css";
import { AppContext } from "../../context";
import { ReactComponent as RemoveIcon } from "../../img/close-116.svg";

const TasksItem = ({ id, title }) => {
  const { dispatch } = useContext(AppContext);
  const buttonRef = useRef(null);

  const deleteTask = (e) => {
    if (!buttonRef.current?.contains(e.target)) {
      return;
    }

    e.preventDefault();
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId: id },
    });
  };

  return (
    <li className={styles.TasksItem}>
      <Link to={`/tasks/${id}`} className={styles.link} onClick={deleteTask}>
        {title}
        <button ref={buttonRef} className={styles.remove}>
          <RemoveIcon />
        </button>
      </Link>
    </li>
  );
};

const TasksList = ({ tasks }) => {
  return (
    <ul className={styles.TasksList}>
      {tasks?.map((task) => {
        return <TasksItem key={task.id} title={task.title} id={task.id} />;
      })}
    </ul>
  );
};

export default TasksList;
