import { ITask } from "src/interfaces";
import { useDispatch } from "react-redux";
import { editTodo } from "src/store/actions";
import { removeTodo } from "src/store/actions";
import { ToDoTask } from "src/Components/ToDoTask";

interface IToDoTaskContainerProps {
  task: ITask;
}

const ToDoTaskContainer = ({ task }: IToDoTaskContainerProps) => {
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
    />
  );
};

export default ToDoTaskContainer;
