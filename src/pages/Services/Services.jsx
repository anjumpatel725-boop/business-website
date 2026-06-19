import React from "react";
import "./Services.css";

function Services() {

  return (

    <section className="services" id="services">


      <h2>Our Services</h2>


      <div className="service-cards">


        <div className="card">

          <h3>Web Development</h3>

          <p>
            Modern responsive websites for businesses.
          </p>

        </div>



        <div className="card">

          <h3>App Development</h3>

          <p>
            Mobile apps for Android and iOS.
          </p>

        </div>



        <div className="card">

          <h3>SEO Optimization</h3>

          <p>
            Improve your Google ranking and visibility.
          </p>

        </div>


      </div>


    </section>

  );

}


export default Services;