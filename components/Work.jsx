import React from "react";
import Heading from "./Heading";
import Link from "next/link";

import { BiLink } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";

const Work = () => {
  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        <Heading title="Creative Works" />

        {/* Work section start */}
        <div className="grid grid-cols-[repeat(1,_auto)] md:grid-cols-[repeat(2,_auto)] lg:grid-cols-[repeat(3,_auto)] justify-center gap-4">
          {/* 1 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-1.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://my-1st-template.netlify.app"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/my-first-repository"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">HTML Css simple page design</h1>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-2.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://my-2nd-template.netlify.app"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/my-blog"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">
                HTML Css Blog Template Design
              </h1>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-3.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://my-3rd-template.netlify.app"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/Portfolio-Template-Html-Css"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">
                HTML Css Portfolio Template Design
              </h1>
            </div>
          </div>
          {/* 4 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-4.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://my-4th-template.netlify.app"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/My-4th-Template"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">HTML Css Design Template</h1>
            </div>
          </div>
          {/* 5 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-5.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://react-tailwind-sass-landing-page.netlify.app/"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/Landing-page-design-with-tailwind"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">React + Sass Landing page.</h1>
            </div>
          </div>
          {/* 6 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-6.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://react-tailwind-darkmode-landing-page.netlify.app"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/lm_project_react_landingPage_with_responsive_tailwind_dark_mode"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">
                React.js Landing page with Tailwind Css and Dark Mode.
              </h1>
            </div>
          </div>
          {/* 7 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-7.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://web-code-task.netlify.app"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/WebCode_Task"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">Web Code It Task</h1>
            </div>
          </div>
          {/* 8 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-8.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://oopen-weather-api.netlify.app/"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/LearnReact-20-OpenWeatherApi"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">Weather app from fake API</h1>
            </div>
          </div>
          {/* 9 */}
          <div className="w-[362px] h-[200px] relative [&>div]:hover:block [&>img]:hover:w-[300px] p-3 rounded-lg shadow-xl">
            <img
              className="bg-slate-900 w-full h-full hover:opacity-50 rounded-lg"
              src="/my_works/work-9.png"
              alt=""
            />
            <div className="w-[50px] absolute top-[14px] right-0 hidden hover:block">
              <Link
                title="Preview this site"
                href="https://clickup-section-project.netlify.app/"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <BiLink className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <IoMdShareAlt className="w-8 h-8" />
              </Link>
              <Link
                href="https://github.com/Mohammad-Asraful/ClickUp_Section_project"
                target="_blank"
                className="flex items-center justify-center bg-[#ff4041] cursor-pointer w-full text-black shadow-md border border-solid border-[#ff4048] hover:bg-white">
                <AiOutlineGithub className="w-8 h-8" />
              </Link>
            </div>
            <div className="w-[70%] absolute bottom-10 left-9 text-center bg-white bg-opacity-70 hidden rounded-lg">
              <h1 className="text-xl font-bold">Weather app from fake API</h1>
            </div>
          </div>
          {/*  */}
        </div>
        {/* Work section end */}
      </div>
    </section>
  );
};

export default Work;
