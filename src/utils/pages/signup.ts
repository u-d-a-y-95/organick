import { z } from "zod";

export const SigninFormDefaultValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

export const SignupFormSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().email().optional().or(z.literal("")),
    mobile: z.string().min(11, "enter a valid mobile number"),
    password: z.string().min(6, "enter at least 6 charecters"),
    confirmPassword: z.string().min(6, "enter at least 6 charecters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "confirm password does not match",
    path: ["confirmPassword"],
  });

export interface SignupForm {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}
