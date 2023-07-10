import InputFieldContainer from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/Containers/inputFieldContainer";

import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/interface";
import { TaskMapper } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/Components/TaskMapper";

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
