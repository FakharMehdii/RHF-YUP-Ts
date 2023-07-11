import { useSelector, useDispatch } from "react-redux";
import { ToDoList } from "src/Components/ToDoList";
import { useEffect } from "react";
import { RootState } from "src/store/reducers";
import { startApp } from "src/store/actions";

const ToDoListContainer = () => {
  const tasks = useSelector((state: RootState) => state.list.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startApp());
  }, []);

  return <ToDoList tasks={tasks} />;
};

export default ToDoListContainer;
