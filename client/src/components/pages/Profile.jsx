import React from "react";
import usericon from "../../assets/user.png";
import loader from "../../assets/Loader.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserState } from "../../state/atoms/UserState.js";

const Profile = () => {
  const user = useRecoilValue(UserState);
  console.log("User from profile", user);
  const router = useNavigate();

  const logout = async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/users/logout", {
        withCredentials: true,
      });
      router("/login");
      window.location.reload();
    } catch (error) {
      console.log("Error while logging out!", error);
    }
  };

  return (
    <>
      {user ? (
        <div className="px-20 py-12 w-full h-fit">
          <div className="shadow-inner shadow-[#59ad75] p-4 flex gap-8 h-full rounded-xl bg-[#E0E3E8]">
            <div className="w-[10%] h-fit flex justify-center items-center">
              <img
                className="h-28 w-28 object-cover "
                src={usericon}
                alt="user"
              />
            </div>
            <div className="flex h-full w-full justify-between ">
              <div className="h-full grid gap-3 text-xl font-semibold">
                <p>
                  <span className="w-44">Name: </span>
                  {user.fullname}
                </p>
                <p>
                  <span>Username: </span>
                  {user.username}
                </p>
                <p>
                  <span>Email: </span>
                  {user.email}
                </p>
              </div>
              <div className="flex flex-col p-2 gap-4">
                <button
                  onClick={() => router("/editprofile")}
                  className="w-44 font-semibold hover:scale-95 duration-200 p-2 rounded-full shadow-inner shadow-[#306642]"
                >
                  Edit Profile
                </button>
                <button
                  onClick={logout}
                  className="w-44 font-semibold hover:scale-95 duration-200 p-2 rounded-full shadow-inner shadow-[#376b48]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full  min-h-screen flex justify-center items-center px-20 py-12">
          <img className=" animate-spin  h-24  " src={loader} alt="" />
        </div>
      )}
    </>
  );
};

export default Profile;
