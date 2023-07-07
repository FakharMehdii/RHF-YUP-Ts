import { useDispatch } from "react-redux";
import { ToDoTask } from "../Components/ToDoTask";
import { editTodo } from "../store/actions";
import { removeTodo } from "../store/actions";
import React from "react";
import { Task } from "../store/reducers";

interface Props {
  task: Task;
}


const ToDoTaskContainer = ({ task }: Props) => {
  const dispatch = useDispatch();

  const editTodoHandler = (task: Props) => {
    dispatch(editTodo(task));
  };
  const removeTodoHandler = (task: Props) => {
    dispatch(removeTodo(task));
  };

  return (
    <ToDoTask
      task={task}
      editTodo={editTodoHandler}
      removeTodo={removeTodoHandler}
    />
  );
};

export default ToDoTaskContainer;
