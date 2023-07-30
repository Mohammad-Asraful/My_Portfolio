import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container mx-auto">
          <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <Heading title="About Me" />
            <h2 className="text-2xl font-semibold">
              I am a Frontend developer. Below is what I know:
            </h2>
            <ul>
              <li className="font-medium">
                ● I know HTML many things for Mark up website.
              </li>
              <li className="font-medium">
                ● I know Vanilla CSS for designed a website.
              </li>
              <li className="font-medium">
                ● I know also CSS framework, like Bootsrap and Tailwind css, and
                I feel comfortable in tailwind css cause it have almost
                everything. And I have Bootsrap basic knowledge.
              </li>
              <li className="font-medium">
                ● I know JavaScript many concept, and I want to learn more about
                to it for growing my knowledge and developed website easily.
              </li>
              <li className="font-medium">
                ● I know also JavaScript Library React.js for make a website and
                love it.
              </li>
              <li className="font-medium">
                ● I know also JavaScript Next.js for make a website and love it
                too and it's very interesting.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
