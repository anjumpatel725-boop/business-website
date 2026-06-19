import React from "react";
import "./Portfolio.css";


function Portfolio() {


  return (

    <section className="portfolio" id="portfolio">


      <h2 className="fade-in">
        Our Portfolio
      </h2>




      <div className="portfolio-grid">



        <div className="project-card slide-up">


          <div className="project-icon">
            🛒
          </div>


          <h3>
            E-Commerce Website
          </h3>


          <p>
            Online shopping platform with product management and payment integration.
          </p>


          <button className="project-btn">
            View Project
          </button>


        </div>






        <div className="project-card slide-up">


          <div className="project-icon">
            📊
          </div>


          <h3>
            Business Dashboard
          </h3>


          <p>
            Analytics dashboard for business management and data visualization.
          </p>


          <button className="project-btn">
            View Project
          </button>


        </div>







        <div className="project-card slide-up">


          <div className="project-icon">
            💻
          </div>


          <h3>
            Portfolio Website
          </h3>


          <p>
            Modern personal branding website with responsive design.
          </p>


          <button className="project-btn">
            View Project
          </button>


        </div>



      </div>



    </section>

  );

}


export default Portfolio;