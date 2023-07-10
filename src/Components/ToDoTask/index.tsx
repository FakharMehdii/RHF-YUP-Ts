import { useState } from "react";
import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/interface";
import { ChangeEvent, KeyboardEvent } from "react";

interface Props {
  task: Task;
  editTodo: (task: Task) => void;
  removeTodo: (task: Task) => void;
}

export function ToDoTask({ task, editTodo, removeTodo }: Props) {
  const [done, setDone] = useState(false);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [taskName, setTaskName] = useState("");

  const handleEdit = () => {
    setEdit(true);
  };

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    setInputValue(event.target.value);
  };

  const handleEditKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue !== "") {
      const updatedElement = { ...task, taskTitle: taskName };
      setEdit(false);
      editTodo(updatedElement);
    }
  };

  return (
    <div className="todoTask">
      {edit ? (
        <div>
          {" "}
          <input
            className="checkbox"
            type="text"
            value={inputValue ? inputValue : task.taskTitle}
            onChange={handleEditChange}
            onKeyDown={handleEditKeyPress}
            autoFocus
          />
        </div>
      ) : (
        <div>
          {" "}
          <input
            type="checkbox"
            onChange={(event) => {
              event.target.checked ? setDone(true) : setDone(false);
            }}
          />{" "}
          <span className={done ? "strike" : "normal"}>{task.taskTitle}</span>{" "}
        </div>
      )}
      <div>
        <i
          id="edit"
          className="fa fa-edit edit buttons"
          onClick={() => handleEdit()}
        ></i>
        <i
          id="delete"
          className="fa-solid fa-trash-can buttons"
          onClick={() => {
            removeTodo(task);
          }}
        ></i>
      </div>
    </div>
  );
}
