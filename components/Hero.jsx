import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/hero_bg.jpg')] h-screen bg-cover bg-center bg-fixed flex items-center">
          <div className="container mx-auto px-4">
            {/* hero texts starts */}
            <div className="max-w-[450px] text-white flex flex-col gap-12">
              <div>
                <h1 className="text-5xl">I'm Asraful Alam</h1>
                {/* type writter start */}
                <h4 className="text-2xl mt-3">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Designer",
                        "Front End Developer",
                        "React Developer",
                      ],
                      changeDelay: 3,
                      changeDeleteSpeed: 3,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4>
                {/* type writter end */}
              </div>
              {/*  */}
              <div className="bg-[#ff4041] h-[2px] w-10"></div>
              <div>
                <p>
                  In a professional context it often happens that private
                  clients corder a publication to be made.
                </p>
                <Button link="#" text="Learn More" />
              </div>
              {/*  */}
            </div>
            {/* hero texts end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
