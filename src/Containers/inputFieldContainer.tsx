import { useDispatch } from "react-redux";
import { InputField } from "../Components/InputField";
import { addTodo } from "../store/actions";
import React from "react";

const InputFieldContainer = () => {
  const dispatch = useDispatch();
  const addTodoHandler = (value: { taskTittle: string }) => {
    dispatch(addTodo(value));
  };
  return <InputField addTodo={addTodoHandler} />;
};

export default InputFieldContainer;
