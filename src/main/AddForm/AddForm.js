import styles from "./AddForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

const Select = ({ onChange, options }) => {
  return (
    <select
      className={styles.Select}
      onChange={onChange}
      defaultValue={""}
      required
    >
      <option value="">Select a task</option>
      {options?.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

const AddForm = ({ currentCategoryStatus, selectOptions, handleFormClose }) => {
  const { dispatch } = useContext(AppContext);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldValue = value.trim();

    if (fieldValue === "") {
      return;
    }
    if (currentCategoryStatus === 0) {
      const newTask = {
        id: uuidv4(),
        title: fieldValue,
        descr: "",
      };
      dispatch({
        type: "ADD_TASK",
        payload: { newTask },
      });
    } else {
      dispatch({
        type: "MOVE_TASK",
        payload: { currentCategoryStatus, taskId: value },
      });
    }
    setValue("");
  };

  return (
    <div className={styles.AddForm}>
      <form onSubmit={handleSubmit}>
        {currentCategoryStatus === 0 ? (
          <Input
            value={value}
            onChange={handleChange}
          />
        ) : (
          <Select options={selectOptions} onChange={handleChange} />
        )}
        <Button type="submit" appearance="primary" disabled={!value}>
          Submit
        </Button>
        <Button type="button" appearance="white" onClick={handleFormClose}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default AddForm;
