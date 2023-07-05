import { useSelector, useDispatch } from "react-redux";
import { ToDoList } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/Components/ToDoList/index";
import { useEffect } from "react";

const ToDoListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "START_APP" });
  }, []);
  const tasks = useSelector((state) => state.list.tasks);
  return <ToDoList tasks={tasks} />;
};

export default ToDoListContainer;
