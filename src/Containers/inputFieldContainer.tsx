import { useDispatch } from "react-redux";
import { addTodo } from "src/store/actions";
import { InputField } from "src/Components/InputField";

const InputFieldContainer = () => {
  const dispatch = useDispatch();
  const addTodoHandler = (value: { taskTitle: string }) => {
    dispatch(addTodo(value));
  };
  return <InputField addTodo={addTodoHandler} />;
};

export default InputFieldContainer;
