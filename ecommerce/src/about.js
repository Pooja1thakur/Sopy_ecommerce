import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="containerr">
          <div className="hero-contant">
            <h2>Welcome To Our Website</h2>
            <p>
              Discover the latest trends and innovations in technology, design,
              and more. Our team of experts brings you the best content and
              insights to help you stay ahead of the curve.
            </p>
            <button className="button">Learn More</button>
          </div>
          <div className="hero_img">
            <img src="./assets/logoshopy - Copy.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
