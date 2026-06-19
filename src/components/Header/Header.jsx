import React, { useState, useEffect, memo } from "react";
import "./Header.css";


function Header() {

  const [darkMode, setDarkMode] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {

    if(darkMode){

      document.body.classList.add("dark-mode");

    }
    else{

      document.body.classList.remove("dark-mode");

    }


  },[darkMode]);




  const closeMenu = () => {

    setMenuOpen(false);

  };



  return (

<header className="header">


<h2 className="logo">
BusinessPro
</h2>




<button

className="menu-btn"

onClick={()=>setMenuOpen(!menuOpen)}

aria-label="Toggle navigation menu"

>

☰

</button>





<ul className={menuOpen ? "nav-links active" : "nav-links"}>


<li>
<a href="#home" onClick={closeMenu}>
Home
</a>
</li>


<li>
<a href="#services" onClick={closeMenu}>
Services
</a>
</li>


<li>
<a href="#portfolio" onClick={closeMenu}>
Portfolio
</a>
</li>


<li>
<a href="#about" onClick={closeMenu}>
About
</a>
</li>


<li>
<a href="#contact" onClick={closeMenu}>
Contact
</a>
</li>



<li>

<button

className="theme-btn"

onClick={()=>setDarkMode(!darkMode)}

>

{
darkMode ? "☀️ Light" : "🌙 Dark"
}


</button>


</li>


</ul>




</header>

  );

}


export default memo(Header);