import { useDispatch } from "react-redux";
import { ToDoTask } from "src/Components/ToDoTask";
import { editTodo } from "src/store/actions";
import { removeTodo } from "src/store/actions";
import { ITask } from "src/interfaces";

interface IToDoTaskContainerProps {
  task: ITask;
  key: number
}

const ToDoTaskContainer = ({ task, key }: IToDoTaskContainerProps) => {
  const dispatch = useDispatch();

  const editTodoHandler = (task: ITask) => {
    dispatch(editTodo(task));
  };
  const removeTodoHandler = (task: ITask) => {
    dispatch(removeTodo(task));
  };

  return (
    <ToDoTask
      task={task}
      editTodo={editTodoHandler}
      removeTodo={removeTodoHandler}
      key={key}
    />
  );
};

export default ToDoTaskContainer;
