import * as yup from "yup";

export const schema = yup.object().shape({
  taskTitle: yup
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
