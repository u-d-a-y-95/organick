"use client";

import {
  SigninFormDefaultValues,
  SignupForm,
  SignupFormSchema,
} from "@/utils/pages/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignIn() {
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
    <div className="flex  text-primary ">
      <div className="hidden lg:block relative w-[600px] h-[600px] self-end">
        <h2 className="text-2xl font-bold text-center"></h2>
        <Image src="/img/about-banner-2.png" fill={true} alt="product" />
      </div>
      <div className="flex-1 sm:w-[600px] p-10 shadow-xl lg:shadow-none">
        <div className="text-center text-4xl font-bold underline decoration-wavy">
          Sign up
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mt-16">
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Name</label>
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
            <div className="flex flex-col mt-5">
              <label className="font-semibold mb-1">Email</label>
              <input
                placeholder="Enter your email"
                className="border p-2"
                type="email"
                {...register("email")}
              />
              {errors["email"] && (
                <span className="text-red-500 text-sm mt-2">
                  *{errors["email"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <label className="font-semibold mb-1">Mobile*</label>
              <input
                placeholder="Enter your mobile number"
                className="border p-2"
                {...register("mobile")}
              />
              {errors["mobile"] && (
                <span className="text-red-500 text-sm mt-2">
                  *{errors["mobile"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <label className="font-semibold mb-1 ">Password*</label>
              <input
                placeholder="Enter password"
                className="border p-2"
                {...register("password")}
              />
              {errors["password"] && (
                <span className="text-red-500 text-sm mt-2">
                  *{errors["password"].message}
                </span>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <label className="font-semibold mb-1 ">Confirm Password*</label>
              <input
                placeholder="Enter password"
                className="border p-2"
                {...register("confirmPassword")}
              />
              {errors["confirmPassword"] && (
                <span className="text-red-500 text-sm mt-2">
                  *{errors["confirmPassword"].message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <div>
              <p>
                already have an account?{" "}
                <Link href="/signin">
                  <span className="font-bold">sign in</span>
                </Link>
              </p>
            </div>
            <button className="bg-primary border-none text-white px-8 py-2 rounded">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
