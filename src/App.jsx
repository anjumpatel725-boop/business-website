import React from "react";

import "./styles/global.css";
import "./styles/variables.css";
import "./styles/animations.css";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";



function App() {

  return (

    <div className="app">


      <Header />


      <main>

        <Home />

        <Services />

        <Portfolio />

        <About />

        <Contact />

      </main>


      <Footer />


    </div>

  );

}


export default App;