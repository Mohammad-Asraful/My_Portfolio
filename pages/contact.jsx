import React, { useState } from "react";
import ContactInfo from "@/components/ContactInfo";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <ContactInfo />
    </section>
  );
};

export default Contact;
