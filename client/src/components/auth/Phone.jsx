import React from "react";
import call from "../../assets/call.svg";
import { Link } from "react-router-dom";

const Phone = () => {
  return (
    <div className="flex items-center justify-center h-fit py-48 px-6 mx-auto">
      <form className="w-full max-w-md">
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white text-center">
          Phone Number Verification
        </h1>

        <div className="relative flex items-center mt-8">
          <img src={call} className="h-5 absolute ml-4" alt="" />

          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Phone Number"
          />
        </div>
        <div className="mt-6">
          <Link to={"/register"}>
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9600AE] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Verify Phone Number
            </button>
          </Link>
          <div className="mt-6 text-center">
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

export default Phone;
