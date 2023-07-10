import { useSelector, useDispatch } from "react-redux";
import { ToDoList } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/Components/ToDoList";
import { useEffect } from "react";
import { RootState } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/reducers";
import { startApp } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/actions";

const ToDoListContainer = () => {
  const tasks = useSelector((state: RootState) => state.list.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startApp());
  }, []);

  return <ToDoList tasks={tasks} />;
};

export default ToDoListContainer;
