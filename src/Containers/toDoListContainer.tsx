import { useEffect } from "react";
import { startApp } from "src/store/actions";
import { RootState } from "src/store/reducers";
import { ToDoList } from "src/Components/ToDoList";
import { useSelector, useDispatch } from "react-redux";

const ToDoListContainer = () => {
  const tasks = useSelector((state: RootState) => state.list.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startApp());
  }, []);

  return <ToDoList tasks={tasks} />;
};

export default ToDoListContainer;
