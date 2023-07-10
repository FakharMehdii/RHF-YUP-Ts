import InputFieldContainer from "../../Containers/inputFieldContainer";

import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/reducers/interface";
import { TaskMapper } from "../TaskMapper";

export interface TodoListProps {
  tasks: Task[];
}

export const ToDoList = ({ tasks }: TodoListProps) => {
  //console.log("hello", tasks.length, tasks);
  return (
    <div className="toDoList">
      <h2 className="heading">My Todo</h2>
      <InputFieldContainer />
      <hr></hr>
      <TaskMapper tasks={tasks}/>
    </div>
  );
};
