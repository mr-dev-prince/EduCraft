import React from "react";
import img from "../../../assets/Gantavya.png";

const AchieverCard = (props) => {
  return (
    <div className="flex flex-col w-[200px]">
      <div className="w-full rounded-xl h-[120px] bg-[#9600AE]/[0.2] backdrop-blur-xl relative flex justify-center items-center shadow-md shadow-[#9600AE]">
        <img
          className="absolute bottom-0 h-56 w-64 object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="p-2 text-center">
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-2xl font-extrabold tracking-wider">
          ₹{props.package}
        </p>
        <p className="font-semibold">{props.region}</p>
      </div>
    </div>
  );
};

export default AchieverCard;
