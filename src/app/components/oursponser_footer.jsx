import React from "react";
import Image from "next/image";
import "./oursponser_footer.css";
import Link from "next/link";
export default function Oursponser_footer() {
  return (
    <div className="ourSponserMain">
      <div className="sponsors">
        <div className="heading">Our Sponsors</div>
        <div className="sponsors-img">
          <div className="sponsors--title">
            <Image
              src="/cropped-KIIT-TBI-Logo--163x74.png"
              alt="KIIT-TBI Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="sponsors--title">
            <Image
              src="/DST-NIDHI.png"
              alt="DST-NIDHI Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="sponsors--title">
            <Image
              src="/logo (2).png"
              alt="Startup Odisha Logo"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <div className="subscribe-title">
          &quot;Passionate about AI and ML? Join our community and be part of
          the next revolution! Open to everyone!&quot;
        </div>
        <Link className="subscribe-btn" href="https://x.com/ml4e_nitr">
          <button className="subscribe-btn">Join Now!!!</button>
        </Link>
      </div>

      <div className="footer">
        <div className="footer-top">
          <div className="footer-link">
            <div className="logo-name">
              <Image
                src="/image 12.png"
                alt="ML4E Logo"
                width={100}
                height={100}
              />
              <p className="footter-ml4e">ML4E Machine Learning 4 Everyone</p>
            </div>
            <div className="usfullinks">
              <p className="footer-heading">Useful Links</p>
              <Link
                className="footer-links-our"
                href="https://github.com/Machine-Learning-for-Everyone-ML4E"
              >
                [Github]
              </Link>
              <Link className="footer-links-our" href="https://x.com/ml4e_nitr">
                [Twitter]
              </Link>
              <Link
                className="footer-links-our"
                href="https://www.linkedin.com/company/machine-learning-for-everyone-ml4e"
              >
                [Linkedin]
              </Link>
            </div>
            <div>
              <div className="contactus">
                <p className="footer-heading">Contact us</p>
              </div>
              For Research Partnerships and Collaborations. <br /> Please Email
              us -
              <Link className="footer-links-our" href="ml4e.nitr@gmail.com">
                {" "}
                ml4e.nitr@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>All rights Reserved. ML4E, NIT Rourkela, 2024</p>
          {/* <h4>Social Logo here</h4> */}
          <div>
            <Image
              src="/image 11.png"
              alt="Footer Decoration"
              width={50}
              height={35}
            />
            Made with Love By - Team ML4E
          </div>
        </div>
      </div>
    </div>
  );
}
