import * as yup from "yup";

export const schema = yup.object().shape({
  taskTitle: yup
    .string()
    .required()
    .max(35, "Task Tittle can contain 35 character only.")
    .min(2, "Task Tittle should be at least 2 characters long.")
    .trim(),
});
