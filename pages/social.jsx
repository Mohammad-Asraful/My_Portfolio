import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Social = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <Heading title="Social Links " />

            {/* Social link start */}
            <div className="py-10 px-5 -mt-10">
              {/* Links start */}
              <div className="inline-block">
                {/* 1 */}
                <a
                  href="https://www.linkedin.com/in/ashraful-alam-169a12196/"
                  target="_blank"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-100 border border-teal-500 px-2 py-3 rounded-lg mb-1">
                  <AiFillLinkedin className="bg-white text-blue-700 rounded-full text-3xl" />
                  <code className="font-bold">
                    https://www.linkedin.com/in/ashraful-alam-169a12196/
                  </code>
                </a>
                {/* 2 */}
                <a
                  href="https://github.com/Mohammad-Asraful"
                  target="_blank"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-100 border border-teal-500 px-2 py-3 rounded-lg mb-1">
                  <AiOutlineGithub className="bg-white text-black rounded-full text-3xl" />
                  <code className="font-bold">
                    https://github.com/Mohammad-Asraful
                  </code>
                </a>
                {/* 3 */}
                <a
                  href="https://www.facebook.com/DarkAsraf43/"
                  target="_blank"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-100 border border-teal-500 px-2 py-3 rounded-lg mb-1">
                  <BsFacebook className="bg-white text-blue-700 rounded-full text-3xl" />
                  <code className="font-bold">
                    https://www.facebook.com/DarkAsraf43/
                  </code>
                </a>
                {/* 4 */}
              </div>
              {/* Links end */}
            </div>
            {/* Social link end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
