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
              I created some templates using HTML, CSS, Sass, Tailwind, and did
              responsive design with them. Like landing page design, login page,
              registration page, portfolio design, blog site, normal template
              etc.
            </p>
          </div>
          {/* card-2 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <DiJavascript1 className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Web Development</h2>

            <p>
              I was creating tailwind landing page with dark mood via react.js /
              next.js. And used react hook form and yup form validation on some
              login page and registration page. I made a weather app with React
              through API.
            </p>
          </div>
          {/* card-3 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <DiResponsive className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Responsive Design</h2>

            <p>
              I made some web sites responsive with vanilla css media query and
              tailwind css, like landing page, portfolio site etc.
            </p>
          </div>
          {/* card-4 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <MdDeveloperMode className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Front-End Development</h2>

            <p>
              Frontend development is what is seen on the front of a website, it
              gives me different pleasure, so frontend design and development is
              my favorite, I use HTML, Vanilla CSS, Sass, Tailwind CSS,
              Bootstrap, JavaScript Basic, React.JS, Next.JS etc. I like to do
              these things.
            </p>
          </div>
          {/* card-5 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <FaReact className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">React.js Developer</h2>

            <p>
              react.js is a JavaScript library. I created a few pages with it
              and created a weather app with an api fetch. Through this I was
              creating clickup section, login - registration form with form
              validation. etc.
            </p>
          </div>
          {/* card-6 */}
          <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-white text-black text-center">
            <div className="flex justify-center items-center">
              <TbBrandNextjs className="p-3 text-[70px] bg-[#ff0649] text-white rounded-full" />
            </div>

            <h2 className="font-medium text-xl">Next.js Developer</h2>

            <p>
              next.js is a JavaScript framework. I made a few pages with it.
              Through this I was building my portfolio, converting a graphic
              designer's website from HTML, CSS to Next.js and Tailwind. etc.
            </p>
          </div>
        </div>
        {/* card div end */}
      </div>
    </section>
  );
};

export default WhatIDo;
