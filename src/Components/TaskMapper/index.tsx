import ToDoTaskContainer from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/Containers/todoTaskContainer";
import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/interface";

export interface Props {
  tasks: Task[];
}


export const TaskMapper:any = ({ tasks }:Props) => {
    return (
      <>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <ToDoTaskContainer task={task} />
         ))
         }
      </>
    );
  
};
