import { useDispatch } from "react-redux";
import { ToDoTask } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/Components/ToDoTask";
import { editTodo } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/actions";
import { removeTodo } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/actions";
import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/interface";

interface Props {
  task: Task;
}


const ToDoTaskContainer = ({task}: Props) => {
  const dispatch = useDispatch();

  const editTodoHandler = (task: Task) => {
    dispatch(editTodo(task));
  };
  const removeTodoHandler = (task: Task) => {
    dispatch(removeTodo(task));
  };

          console.log(task);

  return (
    <ToDoTask
      task={task}
      editTodo={editTodoHandler}
      removeTodo={removeTodoHandler}
    />
  );
};

export default ToDoTaskContainer;
