import { useState } from "react";
import React from "react";
import { Task } from "../../store/reducers";
import { ChangeEvent, KeyboardEvent } from "react";


interface Props {
  task: Task;
  editTodo: (task: Task) => void;
  removeTodo: (task: Task) => void;
}



export function ToDoTask({ task, editTodo , removeTodo } : Props) {
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
      const updatedElement = { ...task, name: taskName };
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
            value={inputValue ? inputValue : task.taskTittle}
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
          <span className={done ? "strike" : "normal"}>
            {inputValue === "" ? task.taskTittle : inputValue}
          </span>{" "}
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
