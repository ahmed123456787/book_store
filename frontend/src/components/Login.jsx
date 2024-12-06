import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState();
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 mb-4 pb-6">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form
          action=""
          method="GET"
          onSubmit={handleSubmit((register) => console.log(register))}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              {...register("email")}
              className="shadow w-full appearance-none border-rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-2xl "
            ></input>
          </div>
          {message && (
            <p className="text-red-500 text-xs">{message}</p>
          )}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow w-full appearance-none border-rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-2xl "
            ></input>
          </div>
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Havent an account? Please{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700"
          >
            Register
          </Link>
        </p>
        {/* Google Sign In  */}
        <div className="mt-4">
          <button className="w-full flex items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaGoogle className="mr-2" />
            Sign In with Google
          </button>
        </div>
        <p className="mt-5 text-gray-500 text-xs text-center">
          2025 Book Store all right reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
