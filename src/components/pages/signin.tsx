"use client";

import { SigninForm } from "@/utils/pages/signin";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSignInMutation } from "@/hooks/apis/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/state/slices/auth.slice";

const schema = z.object({
  mobile: z.string().min(11, "enter a valid mobile number"),
  password: z.string().min(6, "enter at least 6 charecters"),
});

export const SignInForm = () => {
  const [signin, { data, isLoading, isSuccess }] = useSignInMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    defaultValues: {
      mobile: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onsubmit = (data: SigninForm) => {
    signin(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data));
      router.push("/");
    }
  }, [data, dispatch, isSuccess, router]);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mt-16">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Mobile</label>
          <input
            placeholder="Enter mobile number"
            className="border p-2 [appearance:textfield]"
            type="number"
            {...register("mobile")}
          />
          {errors["mobile"] && (
            <span className="text-red-500 text-xs mt-1 first-letter:uppercase">
              *{errors["mobile"].message}
            </span>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <label className="font-semibold mb-1 flex justify-between">
            <span>Password</span>
            <Link href="/forgotpassword">Forgot Password?</Link>
          </label>
          <input
            placeholder="Enter password"
            className="border p-2"
            type="string"
            {...register("password")}
          />
          {errors["password"] && (
            <span className="text-red-500 text-xs mt-1 first-letter:uppercase">
              *{errors["password"].message}
            </span>
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5">
        <div>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="font-bold">sign up</span>
            </Link>
          </p>
        </div>
        <button className="bg-primary border-none text-white px-8 py-2 rounded">
          Sign In
        </button>
      </div>
    </form>
  );
};
