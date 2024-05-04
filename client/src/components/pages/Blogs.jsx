import React from "react";
import BlogCard from "../fragments/cards/BlogCard";
import { blogs } from "../pages/ProductObject";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="flex p-2 justify-between bg-[#9600ae]/[0.2] rounded-xl mt-4">
          <Link className=" focus:bg-[#9600AE] h-16 w-64 grid place-items-center rounded-xl">
            <p className="  text-center text-xl font-semibold rounded-xl text-[#EEBB08]">
              Blogs
            </p>
          </Link>
          <Link className="focus:bg-[#9600AE] h-16 w-64 grid place-items-center rounded-xl">
            <p className="text-center text-xl font-semibold rounded-xl text-[#EEBB08]">
              Videos
            </p>
          </Link>
          <Link className="focus:bg-[#9600AE] h-16 w-64 grid place-items-center rounded-xl">
            <p className="  text-center text-xl font-semibold rounded-xl text-[#EEBB08]">
              News
            </p>
          </Link>
        </div>
      </div>
      <div className="flex p-10 gap-8 justify-between flex-wrap">
        {blogs.map((item) => (
          <BlogCard
            id={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
