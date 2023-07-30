import React from "react";
import Link from "next/link";

import { HiDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <section className="bg-white fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4 border-b-2">
          {/*  */}
          <div className="text-2xl font-[algerian] uppercase">
            <Link href="/">Asraful Alam</Link>
          </div>
          {/*  */}
          <div className="hidden md:flex gap-6">
            <Link className="hover:text-[#ff4041]" href="/">
              Home
            </Link>
            <Link className="hover:text-[#ff4041]" href="/about">
              About
            </Link>
            <Link className="hover:text-[#ff4041]" href="/projects">
              Projects
            </Link>
            <Link className="hover:text-[#ff4041]" href="/blog">
              Blog
            </Link>
            <Link className="hover:text-[#ff4041]" href="/contact">
              Contact
            </Link>
          </div>
          {/*  */}
          <a
            href="/Front-End Developer.pdf"
            className="hidden md:flex border border-[#ff4041] px-4 py-1 text-[#ff4041] rounded-[5px] items-center gap-2 hover:bg-[#ff4041] hover:text-white transition duration-200"
            download="/Front-End Developer.pdf">
            <HiDownload /> Download CV
          </a>
          {/*  */}
          {/* Mobile device nav bar start*/}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}>
            <FiMenu />
          </div>
          {/* Mobile device nav bar end*/}

          {/*  */}
        </div>
      </section>
    </>
  );
};

export default Navbar;
