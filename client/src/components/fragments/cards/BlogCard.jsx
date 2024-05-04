import React from "react";
import { HashLink } from "react-router-hash-link";

const BlogCard = (props) => {
  return (
    <HashLink to={`/${props.id}`}>
      <div
        key={props.id}
        className=" w-[300px] min-h-[350px] hover:scale-105 duration-200 rounded-xl overflow-hidden shadow-md shadow-[#9600AE]"
      >
        <img src={props.src} className="" alt="" />
        <div className="p-1 flex flex-col gap-1">
          <div className="p-1 flex flex-col gap-1">
            <p className="font-semibold text-xl">{props.title}</p>
            <p className=" text-sm tracking-wider">{props.description}</p>
          </div>
          <HashLink className=" px-3 hover:underline">Read More</HashLink>
        </div>
      </div>
    </HashLink>
  );
};

export default BlogCard;
