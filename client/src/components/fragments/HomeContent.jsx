import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiFacebook,
} from "react-icons/fi";
import ScrollAnimation from "./ScrollAnimation";
import ScrollAnimation2 from "./ScrollAnimation2";
import { useRecoilValue } from "recoil";
import { UserState } from "../../state/atoms/UserState.js";

const HomeContent = () => {
  const user = useRecoilValue(UserState);
  return (
    <>
      <div className="flex flex-col gap-6 z-50 w-full ">
        <div className=" hidden md:block">
          <p className="text-2xl md:text-4xl font-bold tracking-wide">
            Master New Skills{" "}
            <span className="text-[#9600AE] text-3xl md:text-5xl tracking-wide">
              Online/Offline
            </span>
          </p>
          <p className="text-2xl md:text-4xl font-bold tracking-wide mt-4">
            with
            <span className="text-3xl md:text-5xl font-bold text-[#9600AE] tracking-wide">
              Top Educators.
            </span>
          </p>
        </div>
        <div className="md:hidden text-4xl font-extrabold capitalize  ">
          <p className="bg-gradient-to-tr from-blue-600 via-pink-500 to-yellow-400 text-transparent inline-block bg-clip-text">
            Learn New Skills <br />
            in most easy way!
          </p>
        </div>
        <p className="font-medium tracking-wider md:text-xl ">
          Build Skills With Courses, Certificates And Degrees Online From <br />
          World-class Universities and Companies.
        </p>
        <div className="drone h-24">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/drone.gif"
            className=" w-24 md:w-32 mix-blend-multiply"
            alt=""
          />
        </div>
        {user ? (
          ""
        ) : (
          <HashLink to={"login"}>
            <button className="button w-[250px]">Register Now</button>
          </HashLink>
        )}
        <span className="flex flex-col md:flex-row gap-2 font-xs -mt-4 pl-2">
          Got any query about which course to join?{" "}
          <HashLink to={"/contact"}>
            <p className="text-[#eebb08] hover:underline transition-all duration-200">
              Contact Us
            </p>
          </HashLink>
        </span>
        <div className="flex flex-col gap-2 mt-4 justify-center items-center md:items-start">
          <p className="text-2xl font-bold tracking-wider">
            Get insights here :
          </p>
          <div className="flex gap-6">
            <HashLink className="hover:scale-125 duration-200">
              <FiInstagram size={24} />
            </HashLink>
            <HashLink className="hover:scale-125 duration-200">
              <FiFacebook size={24} />
            </HashLink>
            <HashLink className="hover:scale-125 duration-200">
              <FiLinkedin size={24} />
            </HashLink>
            <HashLink className="hover:scale-125 duration-200">
              <FiTwitter size={24} />
            </HashLink>
            <HashLink className="hover:scale-125 duration-200">
              <FiYoutube size={24} />
            </HashLink>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-6 pr-8 h-full">
        <ScrollAnimation />
        <ScrollAnimation2 />
      </div>
    </>
  );
};

export default HomeContent;
