import ToDoTaskContainer from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/Containers/todoTaskContainer";
import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/reducers/interface";
import React from "react";

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
