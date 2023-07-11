import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "src/Components/validationSchema";

interface IInputFieldProps {
  addTodo: (value: { taskTitle: string }) => void;
}

export const InputField = ({ addTodo }: IInputFieldProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (taskName: { taskTitle: string }) => {
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
