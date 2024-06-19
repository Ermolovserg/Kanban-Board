import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context";
import AddForm from "../AddForm/AddForm";
import TasksList from "../TasksList/TasksList";
import Button from "../UI/Button/Button";
import styles from "./Category.module.css";

const Category = ({ status, title, tasks }) => {
  const { state } = useContext(AppContext);
  const [isFormVisible, setFormVisible] = useState(false);
  const [prevCategory, setPrevCategory] = useState(null);

  useEffect(() => {
    if (state && state.length > 0) {
      setPrevCategory(state[status - 1]);
    }
  }, [state, status]);

  const hideForm = () => {
    setFormVisible(false);
  };

  const showForm = () => {
    setFormVisible(true);
  };

  return (
    <div className={styles.Category}>
      <h2 className={styles.title}>{title}</h2>
      <TasksList tasks={tasks} />
      {isFormVisible ? (
        <AddForm
          currentCategoryStatus={status}
          selectOptions={prevCategory?.tasks}
          handleFormClose={hideForm}
        />
      ) : (
        <Button
          appearance="transparent"
          onClick={showForm}
          disabled={!prevCategory?.tasks.length && status !== 0}
        >
          + Add Task
        </Button>
      )}
    </div>
  );
};

export default Category;
