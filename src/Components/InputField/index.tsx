import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
      (value: string) => {
        const input: string[] = value.split("");
        return !input.some((character) => character >= "0" && character <= "9");
      }
    ),
});

interface Props {
  addTodo: (taskTittle: { taskTittle: string }) => void;
}

export const InputField = ({ addTodo }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (taskTittle: {taskTittle : string}) => {
    addTodo(taskTittle);
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
