import { useEffect, useState } from "react";
import { ITask } from "src/interfaces";
import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "src/Components/validationSchema";

interface IToDoTaskProps {
  task: ITask;
  editTodo: (task: ITask) => void;
  removeTodo: (task: ITask) => void;
}

export function ToDoTask({ task, editTodo, removeTodo }: IToDoTaskProps) {
  const [done, setDone] = useState(false);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEdit = () => {
    setEdit(true);
  };

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = () => {
    const updatedElement = { ...task, taskTitle: inputValue };
    setEdit(false);
    editTodo(updatedElement);
  };

  return (
    <div className="todoTask">
      {edit ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <input
            {...register("taskTitle")}
            type="text"
            value={inputValue ? inputValue : task.taskTitle}
            onChange={handleEditChange}
            autoFocus
          />
          {errors.taskTitle && (
            <p className="errorMessage">{errors.taskTitle.message}</p>
          )}
        </form>
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
