import React from "react";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        <Heading title="Skills" />

        {/* Skills text start */}
        <p className="text-gray-600 -mt-10 mb-10">
          It is impossible to say that i know anything in the world of
          programming completely, because there are new updates every day. But I
          have good knowledge of the following programming languages and their
          libraries and freameworks, along with good knowledge of vanilla CSS,
          Tailwind CSS and a basic understanding of Bootsrap to enhance the
          beauty of a website.
        </p>
        {/* Skills text end */}

        {/* Skills start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skill-1 */}
          <div>
            <p>React.js</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[70%]"></div>
            </div>
          </div>
          {/* Skill-2 */}
          <div>
            <p>Next.js</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[60%]"></div>
            </div>
          </div>
          {/* Skill-3 */}
          <div>
            <p>JavaScript</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[50%]"></div>
            </div>
          </div>
          {/* Skill-4 */}
          <div>
            <p>HTML</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[85%]"></div>
            </div>
          </div>
          {/* Skill-5 */}
          <div>
            <p>CSS</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[75%]"></div>
            </div>
          </div>
          {/* Skill-6 */}
          <div>
            <p>Bootsrap</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[25%]"></div>
            </div>
          </div>
          {/* Skill-7 */}
          <div>
            <p>Tailwind Css</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[85%]"></div>
            </div>
          </div>
          {/*  */}
          {/* Skill-7 */}
          <div>
            <p>SASS</p>
            <div className="relative bg-gray-400 h-1 mt-2">
              <div className="bg-[#ff4041] absolute h-1 w-[65%]"></div>
            </div>
          </div>
          {/*  */}
        </div>
        {/* Skills end */}
      </div>
    </section>
  );
};

export default Skills;
