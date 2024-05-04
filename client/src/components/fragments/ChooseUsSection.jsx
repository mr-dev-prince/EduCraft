import React from "react";
import img2 from "../../assets/Robo.png";
import { HashLink } from "react-router-hash-link";
import img1 from "../../assets/skill3.jpg";
import img3 from "../../assets/skill2.jpg";

const ChooseUsSection = () => {
  return (
    <div className="mt-24 flex flex-col ">
      <div className="grid place-items-center">
        <p className="text-5xl pl-12 h-[70px]  font-extrabold tracking-wider text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
          Why Choose Us?
        </p>
      </div>
      <div className="relative md:h-[450px] bg-[#9600AE]/[0.2] mt-12 flex flex-wrap justify-center  md:justify-between items-center">
        <img src={img2} className="hidden md:absolute h-48 right-20 -top-16" alt="" />
        <div className="h-full md:w-[50%] w-full flex justify-center items-center">
          <div className=" hidden md:grid grid-cols-6 grid-rows-6 h-full w-full p-8 pl-12">
            <img
              src={img1}
              className="col-start-1 col-end-4 row-start-1 row-end-5 w-[350px] h-[250px] rounded-lg object-cover shadow-lg shadow-[#9600AE]"
              alt=""
            />
            <img
              src={img3}
              className="col-start-3 col-end-6 row-start-3 row-end-6 w-[350px] h-[250px] rounded-xl object-cover shadow-lg shadow-[#9600AE]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-[50%] h-full p-6">
          <div className="grid gap-2">
            <p className="text-3xl font-bold tracking-wider">
              Learn <span className="text-[#9600ae] text-4xl">New Skills</span>
              <br /> when-ever and where-ever you like.
            </p>
            <p className="text-lg font-semibold text-slate-600">
              Delve into the depth of concepts and conquer everything.
            </p>
          </div>
          <div className="grid gap-5 mt-8 mb-10">
            <p className="text-lg font-semibold">✓ Hand-Picker Authors</p>
            <p className="text-lg font-semibold">✓ Complete at your own Pace</p>
            <p className="text-lg font-semibold">✓ Easy-to-Follow Curriculum</p>
            <p className="text-lg font-semibold">✓ Money-Back Guarantee</p>
          </div>
          <HashLink>
            <p className="button w-[200px]">Join Us Now</p>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
