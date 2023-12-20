"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "../Loading/Loading";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const redirectPath = params.get("redirect-path");
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json()",
        },
        body: JSON.stringify(data),
      };
      // check email and password
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/auth`,
        requestOptions
      );
      const result = await res.json();
      if (result.status === 200) {
        router.push(redirectPath ? redirectPath : "/dashboard");
      } else {
        setError("password", {
          type: "manual",
          message: result?.error,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="mb-4 relative">
        <label className="text-left text-gray-800 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 bg-white"
          {...register("email", { required: "Email is required" })}
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4 relative">
        <label className="text-left text-gray-800 font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 bg-white"
          {...register("password", { required: "Password is required" })}
          placeholder="Your password"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-dashboard-primary hover:bg-dashboard-secondary text-white font-semibold py-3 px-6 rounded w-full"
      >
        {loading ? <Loading className="" /> : <span>Login</span>}
      </button>
      {errors && (
        <p className="text-red-500 text-sm mt-2">
          {errors.email?.message || errors.password?.message}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
