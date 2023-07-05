import InputFieldContainer from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/Containers/inputFieldContainer";
import ToDoTaskContainer from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/Containers/todoTaskContainer";

export const ToDoList = ({ tasks }) => {
  return (
    <div className="toDoList">
      <h2 className="heading">My Todo</h2>
      <InputFieldContainer />
      <hr></hr>
      {tasks.length &&
        tasks.map((task, index) => (
          <ToDoTaskContainer task={task} key={index} />
        ))}
    </div>
  );
};
