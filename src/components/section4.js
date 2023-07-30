import React from 'react';
import '../styles/sections.css';
import cyber from '../images/cyber.jpg';

const Section4 = () => {
  return (
    <section className="section section4">
      <div className="content">
        <div className="image">
          <img src= {cyber} alt="thirdSec" />
        </div>
        <div className="text">
          <h2>Introducing TechKnow Project</h2>
          <p>
            TechKnow Project is a community-driven initiative by Comprix Technology. It aims to empower tech enthusiasts
            and beginners by providing expert support and guidance. Collaborate, learn, and grow together with TechKnow
            Project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
