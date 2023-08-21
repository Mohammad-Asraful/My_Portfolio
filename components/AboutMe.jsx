import React from "react";
import Heading from "./Heading";

// icons import starts
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { TbAbc } from "react-icons/tb";
// icons import end

const AboutMe = () => {
  return (
    <section className="bg-[#fcf2e8]">
      <div className="container mx-auto py-10 px-4">
        <div>
          {/* about heading start */}
          <Heading title="About Me" />
          {/* about heading end */}

          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {/* about image start */}
            <div>
              <img
                className="w-[400px] shadow-2xl"
                src="/aboutme.png"
                alt="about_me_image"
              />
            </div>
            {/* about image end */}

            {/*  */}
            <div>
              {/* icons div starts */}
              <div className="flex items-center justify-between w-[360px]">
                {/* icons starts */}
                <div className="flex flex-col gap-6">
                  {/* 1 */}
                  <div className="flex gap-4 items-center font-medium">
                    <AiOutlineGift className="text-[#ff4041] text-[22px]" />
                    Name
                  </div>
                  {/* 2 */}
                  <div className="flex gap-4 items-center font-medium">
                    <FiBookOpen className="text-[#ff4041] text-[22px]" />
                    Study
                  </div>
                  {/* 3 */}
                  <div className="flex gap-4 items-center font-medium">
                    <BsGlobe2 className="text-[#ff4041] text-[22px]" />
                    Website
                  </div>
                  {/* 3.5 */}
                  <div className="flex gap-4 items-center font-medium">
                    <AiOutlinePhone className="text-[#ff4041] text-[22px]" />
                    Phone
                  </div>
                  {/* 4 */}
                  <div className="flex gap-4 items-center font-medium">
                    <TbPacman className="text-[#ff4041] text-[22px]" />
                    Interest
                  </div>
                  {/* 5 */}
                  <div className="flex gap-4 items-center font-medium">
                    <IoLocationOutline className="text-[#ff4041] text-[22px]" />
                    Location
                  </div>
                  {/* 6 */}
                  <div className="flex gap-4 items-center font-medium">
                    <TbAbc className="text-[#ff4041] text-[22px]" />
                    Language
                  </div>
                  {/*  */}
                </div>
                {/* icons end */}

                {/* colon div start */}
                <div className="flex flex-col gap-6 text-gray-600">
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                  <div>:</div>
                </div>
                {/* colon div end */}

                <div className="flex flex-col gap-6 text-gray-600">
                  <div>Mohammad Asraful Alam</div>
                  <div>CSE in Engineering (completed)</div>
                  <div className="w-max">
                    https://asraful-portfolio.vercel.app/
                  </div>
                  <div>01709299377</div>
                  <div>Reading, Coding, Researching</div>
                  <div>Lakshmipur, Lakshmipur-3700</div>
                  <div>Bangla, English, Hindi</div>
                </div>
              </div>
              {/* icons div end */}

              {/* about text start */}
              <div className="max-w-[800px]">
                <h2 className="text-xl font-bold mt-16 mb-10">
                  My Name Is Asraful Alam & I Am A Font-End Developer
                </h2>
                <p className="text-gray-600">
                  A motivated junior front-end developer with a curiosity about
                  learning and exploring new languages and development
                  tools.💻💻
                </p>
              </div>
              {/* about text end */}
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
