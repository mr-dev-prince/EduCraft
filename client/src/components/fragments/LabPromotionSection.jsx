import React from "react";
import { HashLink } from "react-router-hash-link";
import img1 from "../../assets/svg2.svg";

const LabPromotionSection = () => {
  return (
    <div className="flex justify-between">
      <div className="p-12 pt-20">
        <p className="text-4xl font-bold tracking-wider">
          Want <span className="text-5xl text-[#9600ae] ">Free* Labs</span> for
          your <br />{" "}
          <span className="text-[#9600ae]/[0.8]">School/College?</span>
        </p>
        <p className="text-lg font-semibold mt-4 text-slate-500">
          Enquire Now About Our Free Labs Program for Schools & Colleges
        </p>
        <div className="flex gap-5 mt-12 items-center">
          <HashLink>
            <p className="button w-[200px]">Enquire Now</p>
          </HashLink>
          <HashLink>
            <p className="hover:underline duration-200">Learn More</p>
          </HashLink>
        </div>
        <div className="flex w-full gap-12 pt-10">
          <div className="h-[100px] w-[100px] rounded-lg flex justify-center items-center flex-col">
            <p className="text-3xl font-bold ">30+</p>
            <p className="font-semibold text-xl">School</p>
          </div>
          <div className="h-[100px] w-[100px] rounded-lg flex justify-center items-center flex-col">
            <p className="text-3xl font-bold ">55+</p>
            <p className="font-semibold text-xl">Colleges</p>
          </div>
          <div className="h-[100px] w-[100px] rounded-lg flex justify-center items-center flex-col">
            <p className="text-3xl font-bold ">1000+</p>
            <p className="font-semibold text-xl">Students</p>
          </div>
        </div>
      </div>
      <div className="pr-12 hidden md:flex justify-center items-center w-[50%]">
        <img className="h-[500px]" src={img1} alt="" />
      </div>
    </div>
  );
};

export default LabPromotionSection;
