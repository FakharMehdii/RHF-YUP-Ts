import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  taskTittle: yup
    .string()
    .required()
    .max(35, "Task Tittle can contain 35 character only.")
    .min(3, "Task Tittle should be at least 3 characters long.")
    .trim()
    .test(
      "non-numerical",
      "NUMBERS NOT ALLOWED!!! Kindly Write numbers in alphabets...",
      (value) => {
        value = value.split("");
        return !value.some((character) => character >= "0" && character <= "9");
      }
    ),
});

export const InputField = ({ addTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    addTodo(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        {...register("taskTittle")}
        type="text"
        className="input"
        placeholder="Input task name and then tab enter to add"
        autoFocus
        required
      />
      {errors.taskTittle && (
        <p className="errorMessage"> {errors.taskTittle.message}</p>
      )}
    </form>
  );
};
