import { useDispatch } from "react-redux";
import { InputField } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/Components/InputField/index";
import { addTodo } from "/home/mergestack/Desktop/Fakhar Training/React/React Hook Form/my-redux-hook-form-app/src/store/actions/index";

const InputFieldContainer = () => {
  const dispatch = useDispatch();
  const addTodoHandler = (value) => {
    dispatch(addTodo(value));
  };
  return <InputField addTodo={addTodoHandler} />;
};

export default InputFieldContainer;
