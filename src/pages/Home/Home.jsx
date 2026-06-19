import React from "react";
import "./Home.css";


function Home() {


  const scrollToContact = () => {

    document
    .getElementById("contact")
    .scrollIntoView({
      behavior:"smooth"
    });

  };



  return (


    <section 
    className="hero fade-in" 
    id="home"
    >



      <div className="hero-content slide-up">


        <h1>

          Grow Your Business With Us

        </h1>



        <p>

          We provide modern web solutions to help your business 
          grow faster with innovative technology.

        </p>




        <button

        onClick={scrollToContact}

        aria-label="Get started and contact us"

        >

          Get Started

        </button>



      </div>



    </section>


  );

}


export default Home;