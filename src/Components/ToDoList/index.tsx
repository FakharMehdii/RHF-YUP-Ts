import InputFieldContainer from "../../Containers/inputFieldContainer";
import ToDoTaskContainer from "../../Containers/todoTaskContainer";
import React from "react";
import {Task} from "../../store/reducers"

interface Props {
  tasks: Task[]
}

export const ToDoList = ({ tasks  }: Props) => {
  return (
    <div className="toDoList">
      <h2 className="heading">My Todo</h2>
      <InputFieldContainer />
      <hr></hr>
      {tasks.length &&
        tasks.map((task: Task, index: number) => (
          <ToDoTaskContainer task={task} key={index} />
        ))}
    </div>
  );
};
