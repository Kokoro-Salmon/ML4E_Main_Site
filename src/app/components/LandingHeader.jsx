import React from "react";
import Image from "next/image";
import "./LandingHeader.css";

function LandingHeader({ scrollToSection }) {
  return (
    <div className="landing-header">
      {/* Logo and Title */}
      <div className="logo-title">
        <Image
          src="/ML4E.png"
          width={63.56}
          height={63.48}
          alt="ML4Everyone Logo"
          className="responsiveImage"
          // layout="responsive"
        />
      </div>
      {/* Navigation Links */}
      <div className="nav-links">
        <button onClick={() => scrollToSection("project")} className="link">
          Projects
        </button>
        <button onClick={() => scrollToSection("about")} className="link">
          About Us
        </button>
        <button onClick={() => scrollToSection("resources")} className="link">
          Resources
        </button>
        <button onClick={() => scrollToSection("contact")} className="link">
          Contact Us
        </button>
      </div>
      {/* Secondary Logo */}
      <div className="secondary-logo">
        <Image
          src="/NITR.png"
          alt="NITR Logo"
          width={61.29}
          height={64.44}
          className="responsiveImage"
          // layout="responsive"
        />
      </div>
    </div>
  );
}

export default LandingHeader;
