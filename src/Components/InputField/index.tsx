import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/Components/InputField/schema";

interface Props {
  addTodo: (value: any) => void;
}


export const InputField = ({ addTodo }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (taskName: any) => {
    addTodo(taskName);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        {...register("taskTitle")}
        type="text"
        className="input"
        placeholder="Input task name and then tab enter to add"
        autoFocus
        required
      />
      {errors.taskTitle && (
        <p className="errorMessage"> {errors.taskTitle.message}</p>
      )}
    </form>
  );
};
