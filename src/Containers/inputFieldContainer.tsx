import { useDispatch } from "react-redux";
import { InputField } from "src/Components/InputField";
import { addTodo } from "src/store/actions";

const InputFieldContainer = () => {
  const dispatch = useDispatch();
  const addTodoHandler = (value: { taskTitle: string }) => {
    dispatch(addTodo(value));
  };
  return <InputField addTodo={addTodoHandler} />;
};

export default InputFieldContainer;
