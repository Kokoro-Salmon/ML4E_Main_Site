import React from "react";
import Image from "next/image";
import Link from "next/link";

function LandingHeader() {
  return (
    <div className="landing-header">
      {/* Logo and Title */}
      <div className="logo-title">
        <Image
          src="/ML4E.png"
          width={63.56}
          height={63.48}
          alt="ML4Everyone Logo"
        />
      </div>
      {/* Navigation Links */}
      <div className="nav-links">
        <Link href="/project" className="link">
          Project
        </Link>
        <Link href="/about" className="link">
          About Us
        </Link>
        <Link href="/resources" className="link">
          Resources
        </Link>
        <Link href="/contact" className="link">
          Contact Us
        </Link>
      </div>
      {/* Secondary Logo */}
      <div className="secondary-logo">
        <Image src="/NITR.png" alt="NITR Logo" width={61.29} height={64.44} />
      </div>
    </div>
  );
}

export default LandingHeader;
