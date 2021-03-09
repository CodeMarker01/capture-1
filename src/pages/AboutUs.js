import React from "react";
// IMPORT components
import GlobalStyle from "../components/GlobalStyle";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

function AboutUs() {
  return (
    <>
      <GlobalStyle />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
}

export default AboutUs;
