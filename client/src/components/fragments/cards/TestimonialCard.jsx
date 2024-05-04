import React from "react";
import { FaStar } from "react-icons/fa";
import img from "../../../assets/profile.png";

const TestimonialCard = () => {
  return (
    <div className=" w-[300px] h-[400px] flex flex-col justify-between rounded-xl p-4 bg-[#EEBB08]/[0.2] shadow-md shadow-[#9600AE] hover:scale-105 duration-200">
      <div className="flex justify-center items-center p-4 gap-2 ">
        <FaStar size={20} color="#9600AE" />
        <FaStar size={20} color="#9600AE" />
        <FaStar size={20} color="#9600AE" />
        <FaStar size={20} color="#9600AE" />
        <FaStar size={20} color="#9600AE" />
      </div>
      <p className="mt-8 text-center font-semibold text-[#9600AE]/[0.5]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ut,
        magni minima fugiat iure quasi tenetur libero molestias facere
        blanditiis rerum, in, quas quos molestiae.
      </p>
      <div className="mt-8 flex justify-start gap-4 items-center">
        <img src={img} className="h-10" alt="" />
        <div>
          <p className="font-semibold">Kishan Kumar</p>
          <p>Founder, AxilZest</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
