import React from "react";
import "./Portfolio.css";


function Portfolio() {

  return (

    <section className="portfolio" id="portfolio">


      <h2>Our Portfolio</h2>


      <div className="portfolio-grid">


        <div className="project-card">


          <h3>E-Commerce Website</h3>


          <p>
            Online shopping platform with payment integration.
          </p>


        </div>




        <div className="project-card">


          <h3>Business Dashboard</h3>


          <p>
            Analytics dashboard for business management.
          </p>


        </div>




        <div className="project-card">


          <h3>Portfolio Website</h3>


          <p>
            Modern personal branding website.
          </p>


        </div>


      </div>


    </section>

  );

}


export default Portfolio;