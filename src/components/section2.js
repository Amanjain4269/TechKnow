import React from 'react';
import '../styles/sections.css';
import cyber from'../images/cyber.jpg';

const Section2 = () => {
  return (
    <section className="section section2">
      <div className="content">
        <div className="image">
          <img src={cyber} alt="firstSec" />
        </div>
        <div className="text">
          <h2>Discover the Latest Technology Trends</h2>
          <p>
            Stay ahead in the ever-changing tech landscape. Explore new technologies, programming languages, frameworks,
            and much more with our expert-guided content. Embrace the future of technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
