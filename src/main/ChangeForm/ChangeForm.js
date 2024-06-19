import React, { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./ChangeForm.module.css";
import { AppContext } from "../../context";
import { ReactComponent as CloseIcon } from "../../img/close-116.svg";

const Backdrop = ({ onClick }) => {
  return <div className={styles.Backdrop} onClick={onClick} />;
};

const Textarea = ({ value, name, onChange }) => {
  return (
    <textarea
      className={styles.Textarea}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

const ChangeForm = ({ task, handleClose }) => {
  const { dispatch } = useContext(AppContext);

  const [fields, setFields] = useState({
    title: task.title,
    description: task.description || "",
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = fields.title.trim();
    const description = fields.description.trim();

    if (!title.length) {
      alert("Title cannot be empty");
      return;
    }

    const changedTask = {
      title,
      description,
      id: task.id,
    };

    dispatch({
      type: "CHANGE_TASK",
      payload: { changedTask },
    });

    handleClose();
  };

  return (
    <>
      <div className={styles.ChangeForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h3 className={styles.title}>Edit task</h3>
            <button className={styles.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <Input name={"title"} value={fields.title} onChange={handleChange} />
          <Textarea
            name={"description"}
            value={fields.description}
            onChange={handleChange}
          />
          <Button appearance={"light"} type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Backdrop onClick={handleClose} />
    </>
  );
};

export default ChangeForm;