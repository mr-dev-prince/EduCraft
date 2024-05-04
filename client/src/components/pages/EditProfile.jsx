import React, { useState } from "react";
import axios from "axios";

const EditProfile = () => {
  const [updateData, setUpdateData] = useState();

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.id]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      console.log(updateData);
      const res = await axios.patch(
        "http://localhost:4000/api/v1/users/updatedetails",
        updateData,
        { withCredentials: true }
      );
      alert("Details updated!");
      console.log("Details updated!", res);
    } catch (error) {
      console.log("Error while updating detals", error);
    }
  };
  
  return (
    <div className="px-20 min-h-screen">
      <div className="w-full flex flex-col justify-center items-center pt-24">
        <form
          onSubmit={handleUpdate}
          action="POST"
          className="flex flex-col gap-10 w-[30%]  py-8"
        >
          <p className="text-center text-2xl font-bold capitalize underline underline-offset-8">
            Update account details
          </p>
          <input
            onChange={handleChange}
            type="text"
            id="fullname"
            required
            placeholder="Enter New Name"
            className="border-b-2 outline-none p-1"
          />
          <input
            onChange={handleChange}
            type="email"
            required
            id="email"
            placeholder="Enter New Email"
            className="border-b-2 outline-none p-1"
          />
          <button
            type="submit"
            className=" p-2 rounded-xl bg-amber-200 hover:scale-95 hover:bg-amber-400 duration-200"
          >
            Update
          </button>
        </form>
        <button className="bg-slate-200 w-[30%] p-2 rounded-xl hover:scale-95 hover:bg-amber-400 duration-200">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
