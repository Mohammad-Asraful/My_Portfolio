import Link from "next/link";
import React from "react";
import { RiCloseFill } from "react-icons/ri";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}>
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] text-2xl hover:cursor-pointer"
        onClick={toggleSidebar}>
        <RiCloseFill />
      </div>

      <div className="flex flex-col gap-4 text-[28px]">
        <Link className="hover:text-[#ff4041]" href="/">
          Home
        </Link>
        <Link className="hover:text-[#ff4041]" href="/about">
          About
        </Link>
        <Link className="hover:text-[#ff4041]" href="/projects">
          Projects
        </Link>
        <Link className="hover:text-[#ff4041]" href="/social">
          Social Links
        </Link>
        <Link className="hover:text-[#ff4041]" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
