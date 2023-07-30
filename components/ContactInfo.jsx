import React from "react";
import Heading from "./Heading";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        <Heading title="Contact Us" />

        {/* contact information start */}
        <div className="grid grid-cols-[repeat(1,_auto)] md:grid-cols-[repeat(2,_auto)] lg:grid-cols-[repeat(3,_auto)] gap-10 justify-center items-center mb-10">
          {/* contact card start */}
          {/* 1 */}
          <div className="p-3 w-[300px] h-[200px] shadow-lg text-center flex flex-col justify-center items-center">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-[#ff0649]">
              <BsEnvelopeAtFill className="p-3 text-[60px] text-white" />
            </div>
            <h2 className="text-2xl font-bold my-3">My Eamil</h2>
            <p className="text-lg">asrafmail01@gmail.com</p>
          </div>
          {/* 2 */}
          <div className="p-3 w-[300px] h-[200px] shadow-lg text-center flex flex-col justify-center items-center">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-[#ff0649]">
              <AiTwotonePhone className="p-3 text-[60px] text-white" />
            </div>
            <h2 className="text-2xl font-bold my-3">My Number</h2>
            <p className="text-lg">+880 1709-299377</p>
          </div>
          {/* 3 */}
          <div className="p-3 w-[300px] h-[200px] shadow-lg text-center flex flex-col justify-center items-center">
            <div className="w-16 h-16 flex justify-center items-center rounded-full bg-[#ff0649]">
              <FaLocationDot className="p-3 text-[60px] text-white" />
            </div>
            <h2 className="text-2xl font-bold my-3">My Address</h2>
            <p className="text-lg">
              Lakshmipur, Lakshmipur-3700, Lakshmipur Sadar.
            </p>
          </div>
          {/* contact card end */}
        </div>
        {/* contact information end */}

        {/* Contact us form start */}
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Name"
              className="inputStyle"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="inputStyle"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="inputStyle"
            required
          />
          <textarea
            rows="6"
            placeholder="Message"
            className="inputStyle resize-none"
            required></textarea>

          <div>
            <button type="submit" className="btn uppercase">
              Send Message
            </button>
          </div>
        </form>
        {/* Contact us form end */}
      </div>
    </section>
  );
};

export default ContactInfo;
