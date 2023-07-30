import React from 'react';
import '../styles/sections.css';
import cyber from '../images/cyber.jpg';
const Section3 = () => {
  return (
    <section className="section section3">
      <div className="content">
        <div className="text">
          <h2>Embrace the Latest Technology Trends</h2>
          <p>
            Get insights into the most cutting-edge technologies shaping the industry. Stay updated with the latest
            advancements, tools, and techniques. Build the skills that future-proof your career.
          </p>
        </div>
        <div className="image">
          <img src= {cyber} alt="secondSec" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
