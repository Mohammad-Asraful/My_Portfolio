import React from "react";
import Heading from "./Heading";

import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { MdDeveloperMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const WhatIDo = () => {
  return (
    <section className="bg-[#FCF2E8]">
      <div className="container mx-auto py-10 px-4">
        <Heading title="What I Do" />

        {/* card div start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card-1 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <AiOutlineHtml5 className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Web Design</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus sed assumenda dolorem blanditiis repellat
            </p>
          </div>
          {/* card-2 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <DiJavascript1 className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Web Development</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus sed assumenda dolorem blanditiis repellat
            </p>
          </div>
          {/* card-3 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <DiResponsive className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Responsive Design</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus sed assumenda dolorem blanditiis repellat
            </p>
          </div>
          {/* card-4 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <MdDeveloperMode className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Front-End Development</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus sed assumenda dolorem blanditiis repellat
            </p>
          </div>
          {/* card-5 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <FaReact className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">React.js Developer</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus sed assumenda dolorem blanditiis repellat
            </p>
          </div>
          {/* card-6 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <TbBrandNextjs className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Next.js Developer</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus sed assumenda dolorem blanditiis repellat
            </p>
          </div>
        </div>
        {/* card div end */}
      </div>
    </section>
  );
};

export default WhatIDo;
