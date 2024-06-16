import React from "react";
import "./LandingHeader.css";
import "./Hero.css";
import "./landing.css";
import LandingHeader from "./LandingHeader";
import Hero from "./Hero";

export default function Landing({scrollToSection}) {
  return (
    <div className="landingMain">
      <LandingHeader scrollToSection={scrollToSection} />
      <Hero />
    </div>
  );
}
