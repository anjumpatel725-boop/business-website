import React from "react";
import "./Services.css";


function Services() {


  return (

    <section className="services" id="services">


      <h2 className="fade-in">
        Our Services
      </h2>



      <div className="service-cards">



        {/* Web Development */}

        <div className="service-card slide-up">


          <div className="service-icon float">
            🌐
          </div>


          <h3>
            Web Development
          </h3>


          <p>
            We create modern, responsive and user-friendly websites 
            for businesses using latest technologies.
          </p>


        </div>





        {/* App Development */}

        <div className="service-card slide-up">


          <div className="service-icon float">
            📱
          </div>


          <h3>
            App Development
          </h3>


          <p>
            We build powerful mobile applications for Android and iOS 
            with smooth user experience.
          </p>


        </div>





        {/* SEO */}

        <div className="service-card slide-up">


          <div className="service-icon float">
            🚀
          </div>


          <h3>
            SEO Optimization
          </h3>


          <p>
            Improve your website ranking and increase online visibility 
            with effective SEO strategies.
          </p>


        </div>



      </div>



    </section>

  );

}


export default Services;