import React from 'react';
import './aboutus.css';

export default function Aboutus() {
  return (
    <div className="aboutMain">
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="About-us-title">
              <h3>About Us</h3>
            </div>
            <div className="content">
              <p>
                The Machine Learning for Everyone (ML4E) Club at the National Institute of Technology Rourkela is a dynamic and vibrant community dedicated to fostering knowledge, innovation, and collaboration in the field of machine learning and artificial intelligence. As one of the leading technical clubs on campus, it serves as a hub for students passionate about exploring the cutting-edge advancements in these transformative technologies.
                The club envisions a future where machine learning is a fundamental skill accessible to all, empowering students to solve real-world problems and innovate across various domains. Membership is open to all students of NIT Rourkela who 
                have an interest in machine learning and artificial intelligence. The club values enthusiasm, curiosity, and a willingness to learn. By joining, members gain access to a wealth of resources, including hackathons, project opportunities, and a network of like-minded peers.
              </p>
              <div className="button">
                <a href="https://x.com/ml4e_nitr">Join the community</a>
              </div>
            </div>
          </div>
          <div className="icon-section">
            <div className="social">
            <div className="handles"><a href="https://www.linkedin.com/company/machine-learning-for-everyone-ml4e"><img  className='imges' src="/linkdin.svg" alt="LinkedIn" /></a></div>
              <div className="handles"><a href="#"><img className='imges' src="/discord.svg" alt="Discord" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
