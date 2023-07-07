import { useSelector, useDispatch } from "react-redux";
import { ToDoList } from "../Components/ToDoList";
import { useEffect } from "react";
import { RootState } from "../store/reducers";
import React from "react";

const ToDoListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "START_APP" });
  }, []);
  const tasks = useSelector((state: RootState) => state.list.tasks);
  return <ToDoList tasks={tasks} />;
};

export default ToDoListContainer;
