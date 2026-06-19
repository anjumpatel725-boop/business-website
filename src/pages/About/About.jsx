import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Us</h2>

      <p>
        We are a modern software company helping businesses grow with web,
        mobile, and cloud solutions.
      </p>


      <div className="team-grid">

        <div className="member">
          <h3>CEO</h3>
          <span>Business Strategy</span>
        </div>


        <div className="member">
          <h3>Developer</h3>
          <span>Web Development</span>
        </div>


        <div className="member">
          <h3>Designer</h3>
          <span>UI/UX Design</span>
        </div>

      </div>

    </section>
  );
}

export default About;