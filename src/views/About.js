import React from "react";
import "../styles/About.css";
import Banner from "../components/About/Banner";
import AboutSection from "../components/About/AboutSection";

const About = () => {
  return (
    <>
      <Banner />
      <div className="bg-gray-100">
        <AboutSection />
      </div>
    </>
  );
};

export default About;
