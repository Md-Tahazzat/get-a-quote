"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useReducer, useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const constants = {
  NAME: "NAME",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case constants.NAME:
      return { ...state, name: action.payload };
    case constants.EMAIL:
      return { ...state, email: action.payload };
    case constants.PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const SignupForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // handlers functions on change with typescript event
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: constants.NAME, payload: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: constants.EMAIL, payload: e.target.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: constants.PASSWORD, payload: e.target.value });
  };

  // handle submit with typescript submit event and axios
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formElement = e.target as HTMLFormElement;

      // send data to server
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/user`,
        state
      );

      console.log(response.data);

      // reset form
      formElement.reset();

      // redirect to login page
      router.push("/admin/login");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  // console.log(state)
  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className=" relative">
        <label
          htmlFor="name"
          className="text-left text-gray-800 font-medium mb-1"
        >
          Name
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          onChange={handleName}
          className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 bg-white"
          placeholder="Your Name"
        />
      </div>
      <div className=" relative">
        <label
          htmlFor="Email"
          className="text-left text-gray-800 font-medium mb-1"
        >
          Email
        </label>
        <input
          type="email"
          required
          id="Email"
          name="email"
          onChange={handleEmail}
          className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 bg-white"
          placeholder="Your Email"
        />
      </div>
      <div className=" relative">
        <label
          htmlFor="password"
          className="text-left text-gray-800 font-medium mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handlePassword}
          className="w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 bg-white"
          placeholder="Your password"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-950 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded w-full"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
