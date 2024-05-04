import React from "react";
import { HashLink } from "react-router-hash-link";
import { useRecoilValue } from "recoil";
import { UserState } from "../../state/atoms/UserState.js";

const Header = () => {
  const user = useRecoilValue(UserState);
  return (
    <main className=" bg-transparent sticky h-[10vh] w-full">
      <nav className="flex pt-4 md:px-16  px-6  text-xl justify-between items-center font-semibold tracking-wider">
        <HashLink className="hover:scale-90 duration-200" to={"/"}>
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/mainLogo.png?updatedAt=1714812140235"
            className="h-12"
            alt="Reffto"
          />
        </HashLink>
        <div className="hidden sm:flex gap-44">
          <HashLink className="hover:scale-90 duration-200" to={"/courses"}>
            Courses
          </HashLink>
          <HashLink className="hover:scale-90 duration-200" to={"/blogs"}>
            Blogs
          </HashLink>
          <HashLink className="hover:scale-90 duration-200" to={"/gallery"}>
            Gallery
          </HashLink>
          <HashLink className="hover:scale-90 duration-200" to={"/about"}>
            About Us
          </HashLink>
        </div>
        {user ? (
          <HashLink to={"/profile"} className="hover:scale-95 duration-200">
            <img
              className="h-12 w-12"
              src="https://ik.imagekit.io/princeSherwa/Personal/user.png?updatedAt=1714812147304"
              alt="user"
            />
          </HashLink>
        ) : (
          <HashLink className="button w-[150px]" to={"/login"}>
            Login
          </HashLink>
        )}
      </nav>
    </main>
  );
};

export default Header;
