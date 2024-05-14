"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = async (data: any) => {
    try {
      await axios.post("http://localhost:8000/register", data);
      toast.success("Registration successful!", {
        onClose: () => {
          router.push("/login");
        },
      });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };
  return (
    <div className="container mx-auto mt-10 bg-slate-100 rounded-md p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Ro'yxatdan o'tish</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-sm mx-auto bg-white p-8 rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-400 focus:shadow-outline-blue"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:green-blue-400 focus:shadow-outline-blue"
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
        <div className="flex items-center justify-center gap-3">
          <button
            type="submit"
            className="w-[150px] px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Register
          </button>
          <button
            onClick={() => router.push("/login")}
            className="w-[150px] px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
