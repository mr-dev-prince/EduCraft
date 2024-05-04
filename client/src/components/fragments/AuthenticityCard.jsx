import React from "react";
import { FiPlay } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const AuthenticityCard = () => {
  return (
    <div className="w-full flex flex-wrap gap-12 md:mt-24 md:px-12 justify-center md:justify-between items-center">
      <div className="container">
        <div className="elem">
          <FiPlay size={64} color="#9600AE" />
        </div>
        <p className="text-content">Over 5000+ Students</p>
      </div>
      <div className="container">
        <div className="elem">
          <FaUserGraduate size={64} color="#9600AE" />
        </div>
        <p className="text-content">Technology Course's Hub</p>
      </div>
      <div className="container">
        <div className="elem">
          <BsLaptop size={64} color="#9600AE" />
        </div>
        <p className="text-content">Learn Anything Online</p>
      </div>
      <div className="container">
        <div className="elem">
          <FaPeopleGroup size={64} color="#9600AE" />
        </div>
        <p className="text-content">1000+ Students Community</p>
      </div>
      <div className="container">
        <div className="elem">
          <FaHandHoldingHeart size={64} color="#9600AE" />
        </div>
        <p className="text-content">200+ 5 Star Rating</p>
      </div>
    </div>
  );
};

export default AuthenticityCard;
