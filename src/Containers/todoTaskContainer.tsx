import { useDispatch } from "react-redux";
import { ToDoTask } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/Components/ToDoTask";
import { editTodo } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/store/actions";
import { removeTodo } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/store/actions";

const ToDoTaskContainer = ({ task }) => {
  const dispatch = useDispatch();

  const editTodoHandler = (task) => {
    dispatch(editTodo(task));
  };
  const removeTodoHandler = (task) => {
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
