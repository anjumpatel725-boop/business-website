import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero fade-in" id="home">
      <div className="hero-content">
        <h1>Grow Your Business With Us</h1>
        <p>
          We provide modern web solutions to help your business grow faster.
        </p>
        <button 
onClick={() => {
  document.getElementById("contact").scrollIntoView({
    behavior:"smooth"
  });
}}
>
Get Started
</button>
      </div>
    </section>
  );
}

export default Home;