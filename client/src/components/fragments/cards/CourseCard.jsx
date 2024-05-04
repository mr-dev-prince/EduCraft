import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const CourseCard = (props) => {
  const router = useNavigate();

  const handleroute = (props) => {
    router(`/${props.id}`);
  };
  return (
    <div onClick={() => handleroute(props)} className=" cursor-pointer">
      <div
        key={props.id}
        className=" w-[300px] min-h-[350px] hover:scale-105 duration-200 rounded-xl overflow-hidden shadow-md shadow-[#9600AE]"
      >
        <img src={props.src} className="" alt="" />
        <div className="p-1 flex flex-col gap-1">
          <div className="p-1 flex flex-col gap-1">
            <p className="font-semibold text-2xl">{props.title}</p>
            <p className="font-semibold">-{props.author}</p>
            <p className=" text-sm tracking-wider">{props.description}</p>
          </div>
          <div className="flex justify-between item-center mt-4 p-1">
            <p className="bg-[#9600AE] text-white pl-1 pr-1 p-1 rounded-md">
              30% OFF
            </p>
            <div className="flex justify-center items-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="flex justify-between items-center p-1 mt-4">
            <div>
              <p className="font-bold text-lg">₹{props.price}/-</p>
              <p className="text-xs">Incl. of All taxes</p>
            </div>
            <HashLink className=" button w-[150px]">Buy Now</HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
