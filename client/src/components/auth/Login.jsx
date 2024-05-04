import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { TbPasswordMobilePhone } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const notify = (message) => toast.success(message);
  const router = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  axios.defaults.withCredentials = true;
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        formData
      );
      notify("User Logged in Successfully!");
      router("/profile");
      window.location.reload();
      console.log("User logged in successfully!", res);
    } catch (error) {
      console.log("Error while logging user", error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-fit py-24 px-6 mx-auto">
      <form onSubmit={handleLogin} className="w-[30%]">
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize text-center">
          sign In
        </h1>

        <div className="relative flex items-center mt-8">
          <span className="absolute ml-2">
            <MdEmail size={24} color="#D5D0D6" />
          </span>

          <input
            onChange={handleChange}
            type="email"
            id="email"
            required
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email / Username"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute ml-2">
            <TbPasswordMobilePhone size={24} color="#D5D0D6" />
          </span>
          <input
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            id="password"
            required
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
          <span
            onClick={handleShowPassword}
            className="absolute right-6 cursor-pointer"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9600AE] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Sign in
          </button>
          <Toaster />

          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            or sign in with
          </p>

          <Link
            to="#"
            className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <IoLogoGoogle />

            <span className="mx-2">Sign in with Google</span>
          </Link>

          <div className="mt-6 text-center ">
            <Link
              to={"/register"}
              className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            >
              Don’t have an account yet? Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
