import React from 'react';
import Image from 'next/image';
import './oursponser_footer.css';

export default function Oursponser_footer() {
  return (
    <div className="ourSponserMain">
      <div className="sponsors">
        <div className="heading">
          Our Sponsors
        </div>
        <div className="sponsors-img">
          <div className="sponsors--title">
            <Image src="/KIIT-TBI_Logo_ 2.png" alt="KIIT-TBI Logo" width={150} height={100} />
          </div>
          <div className="sponsors--title">
            <Image src="/DST-NIDHI_Original-Logo-H-1024x374 2.png" alt="DST-NIDHI Logo" width={150} height={100} />
          </div>
          <div className="sponsors--title">
            <Image src="/logo 2.png" alt="Startup Odisha Logo" width={150} height={100} />
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <div className="subscribe-title">
          Love our Work and Interested to See the next revolution in AI and ML? Join Our Community! It’s Open to all!
        </div>
        <button className="subscribe-btn">
          Subscribe
        </button>
      </div>
      
      <div className="footer">
        <div className="footer-top">
          <div className="logo-name">
            <Image src="/image 12.png" alt="ML4E Logo" width={100} height={100} />
          </div>
          <div className="footer-link">
            <p>ML4E Machine Learning 4 Everyone</p>
            <p>Useful Link</p>
            <p>Contact us</p>
            <p>For Research Partnerships and Collaborations. <br /> Please Email us -</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>All rights Reserved. ML4E, NIT Rourkela, 2024</p>
          {/* <h4>Social Logo here</h4> */}
          <div>
            <Image src="/image 11.png" alt="Footer Decoration" width={50} height={50} />
            Made with Love By - Team ML4E
          </div>
        </div>
      </div>
    </div>
  );
}
