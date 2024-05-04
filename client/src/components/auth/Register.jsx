import React, { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        formData
      );
      console.log("User created Successfully", response);
    } catch (error) {
      console.log("Error while registering the user!", error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12 h-fit px-6 ">
      <form onSubmit={handleRegister} className="w-[30%]">
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize text-center">
          Register
        </h1>

        <div className="relative flex items-center mt-8">
          <span className="absolute ml-2">
            <MdDriveFileRenameOutline size={24} color="#D5D0D6" />
          </span>
          <input
            onChange={handleChange}
            type="text"
            id="fullname"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Full Name"
          />
        </div>
        <div className="relative flex items-center mt-8">
          <span className="absolute ml-2">
            <MdEmail size={24} color="#D5D0D6" />
          </span>

          <input
            onChange={handleChange}
            type="email"
            id="email"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
          />
        </div>
        <div className="relative flex items-center mt-8">
          <span className="absolute ml-2">
            <FaUserAstronaut size={24} color="#D5D0D6" />
          </span>

          <input
            onChange={handleChange}
            type="text"
            id="username"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>
        <div className="relative flex items-center mt-4">
          <span className="absolute ml-2">
            <TbPasswordMobilePhone size={24} color="#D5D0D6" />
          </span>

          <input
            onChange={handleChange}
            type="password"
            id="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9600AE] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Register
          </button>

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
              to={"/login"}
              className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            >
              Already have an account ? Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
