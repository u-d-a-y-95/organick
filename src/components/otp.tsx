"use client";

import {
  SigninFormDefaultValues,
  SignupForm,
  SignupFormSchema,
} from "@/utils/pages/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Otp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    defaultValues: SigninFormDefaultValues,
    resolver: zodResolver(SignupFormSchema),
  });
  const submitHandler = (data: SignupForm) => {};
  return (
    <div className="flex-1 sm:w-[600px] p-10 shadow-xl lg:shadow-none bg-white">
      <div className="text-center text-3xl font-bold ">Verification Code</div>
      <p className="text-center">Please enter the verification code sent to </p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mt-10">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">OTP</label>
            <input
              placeholder="Enter your name"
              className="border p-2"
              {...register("name")}
            />
            {errors["name"] && (
              <span className="text-red-500 text-sm mt-2">
                *{errors["name"].message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5">
          <p>
            Didn't recevied a code?{" "}
            <button className="underline font-semibold">Resend code</button>
          </p>
          <button className="bg-primary border-none text-white px-8 py-2 rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
