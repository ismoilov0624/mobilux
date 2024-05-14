"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = async (data: any) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      toast.error("Failed to sign in.");
    } else {
      toast.success("Sign in successful!");
      reset();
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto mt-10 bg-slate-100 p-5 rounded-md">
      <h1 className="text-3xl font-bold mb-5 text-center">Kirish</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-sm mx-auto bg-white rounded-md p-8"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-4  00 focus:shadow-outline-blue"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-400 focus:shadow-outline-blue"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
