import React, { useState } from "react";

import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="container mx-auto">
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

          <Heading title="My Projects " />

          {/* Projects start */}
          <div className="py-10 px-4">
            {/* projects-1 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                E-commerce Section
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://lm-4-e-commerce-section-design.netlify.app/"
                frameborder="0"></iframe>
            </div>
            {/* projects-2 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                Sign in Form
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://lm-5-figma-signin-form.netlify.app/"
                frameborder="0"></iframe>
            </div>
            {/* projects-3 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                SASS Landing page
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://scss-or-sass-landing-page.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* projects-4 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                React, tailwind with sass Landing page
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://react-tailwind-sass-landing-page.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* projects-5 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                React, tailwind dark mode Landing page
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://react-tailwind-darkmode-landing-page.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* projects-6 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                My first templete with HTML CSS
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://my-1st-template.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* projects-7 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                Blog website
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://my-2nd-template.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* projects-8 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                Portfolio website
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://my-3rd-template.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* projects-9 */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold mb-8 underline decoration-[#ff4041] decoration-double underline-offset-8">
                Simple website
              </h2>
              <iframe
                className="w-full h-[500px]"
                src="https://my-4th-template.netlify.app"
                frameborder="0"></iframe>
            </div>
            {/* end */}
          </div>
          {/* Projects end */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
