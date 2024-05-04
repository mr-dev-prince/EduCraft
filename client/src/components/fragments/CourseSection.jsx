import React from "react";
import CourseCard from "./cards/CourseCard";
import { HashLink } from "react-router-hash-link";
import { FaArrowRightLong } from "react-icons/fa6";
import { techcourses } from "../pages/ProductObject";

const CourseSection = () => {
  return (
    <div className="md:px-12 md:mt-24 mt-5 flex flex-col">
      <p className="text-5xl text-center md:pl-12 font-extrabold tracking-wider outline bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
        Learn From The Best
      </p>
      <div className="flex flex-wrap gap-12 md:justify-between justify-center items-center mt-16">
        {techcourses.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            author={item.author}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <HashLink
        to={"/courses"}
        className=" md:text-right text-center mt-6 text-xl hover:underline transition-all duration-150 font-semibold flex items-center gap-2 md:justify-end justify-center"
      >
        View More Courses
        <FaArrowRightLong />
      </HashLink>
    </div>
  );
};

export default CourseSection;
