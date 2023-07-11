import { ITask } from "src/interfaces";
import { TaskMapper } from "src/Components/TaskMapper";
import InputFieldContainer from "src/Containers/inputFieldContainer";

interface ITodoListProps {
  tasks: ITask[];
}

export const ToDoList = ({ tasks }: ITodoListProps) => {
  return (
    <div className="toDoList">
      <h2 className="heading">My Todo</h2>
      <InputFieldContainer />
      <hr></hr>
      <TaskMapper tasks={tasks} />
    </div>
  );
};
