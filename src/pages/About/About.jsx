import React from "react";
import "./About.css";


function About() {


  return (

    <section className="about" id="about">



      <h2 className="fade-in">
        About Us
      </h2>




      <p className="slide-left">

        We are a modern software company helping businesses grow with 
        web, mobile, and cloud solutions. We create scalable and 
        user-friendly digital experiences.

      </p>





      <div className="team-grid">



        <div className="member slide-up">


          <div className="member-icon">
            👨‍💼
          </div>


          <h3>
            CEO
          </h3>


          <span>
            Business Strategy
          </span>


        </div>





        <div className="member slide-up">


          <div className="member-icon">
            👨‍💻
          </div>


          <h3>
            Developer
          </h3>


          <span>
            Web Development
          </span>


        </div>






        <div className="member slide-up">


          <div className="member-icon">
            🎨
          </div>


          <h3>
            Designer
          </h3>


          <span>
            UI/UX Design
          </span>


        </div>




      </div>



    </section>

  );

}


export default About;