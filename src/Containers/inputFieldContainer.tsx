import { useDispatch } from "react-redux";
import { InputField } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/Components/InputField";
import { addTodo } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/actions";


const InputFieldContainer = () => {
  const dispatch = useDispatch();
  const addTodoHandler = (value: any) => {
    dispatch(addTodo(value));
  };
  return <InputField addTodo={addTodoHandler} />;
};

export default InputFieldContainer;
