import { ITask } from "src/interfaces";
import ToDoTaskContainer from "src/Containers/todoTaskContainer";

export interface ITaskMapperProps {
  tasks: ITask[];
}

export const TaskMapper = ({ tasks }: ITaskMapperProps) => {
  return (
    <>
      {tasks.length > 0 &&
        tasks.map((task, index) => <ToDoTaskContainer task={task} key={index} />)}
    </>
  );
};
