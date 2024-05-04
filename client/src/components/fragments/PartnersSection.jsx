import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import ScrollAnimation3 from "./ScrollAnimation3";

const PartnersSection = () => {
  return (
    <div className="mt-12">
      <div className="grid place-items-center">
        <p className="text-5xl pl-12 font-extrabold tracking-wider text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
          Our Partners
        </p>
      </div>
      <div className="w-full h-[300px] mt-12">
        <ScrollAnimation3 />
      </div>
      <div className="flex flex-wrap gap-10 w-full justify-center items-center">
        <div>
          <p className="text-2xl font-semibold">Join Our Free Community Here</p>
          <p className="text-lg text-slate-600">Stay Tension-free of Spams.</p>
        </div>
        <div className="flex w-[400px] bg-[#9600ae]/[0.2] justify-between rounded-xl overflow-hidden">
          <input
            className="w-full indent-5 bg-transparent outline-none font-semibold text-lg"
            type="email"
          />
          <p className="button cursor-pointer">Subscribe</p>
        </div>
      </div>
      <div className="grid place-items-center mt-12">
        <img
          className="h-20"
          src="https://ik.imagekit.io/princeSherwa/Personal/mainLogo.png"
          alt=""
        />
      </div>
      <div className="w-full grid place-items-center mt-8 gap-6">
        <p className="text-xl font-semibold">Let's Connect</p>
        <div className="flex gap-10">
          <HashLink className="hover:scale-150 duration-200">
            <FiInstagram size={36} />
          </HashLink>
          <HashLink className="hover:scale-150 duration-200">
            <FiFacebook size={36} />
          </HashLink>
          <HashLink className="hover:scale-150 duration-200">
            <FiLinkedin size={36} />
          </HashLink>
          <HashLink className="hover:scale-150 duration-200">
            <FiTwitter size={36} />
          </HashLink>
          <HashLink className="hover:scale-150 duration-200">
            <FiYoutube size={36} />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
