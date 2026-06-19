import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {


const [open, setOpen] = useState(false);



const closeMenu = () => {

    setOpen(false);

};



return (

<header className="navbar">


<div className="logo">

BusinessPro

</div>



<div 
className={`menu ${open ? "active" : ""}`}
>


<a href="#home" onClick={closeMenu}>
Home
</a>


<a href="#about" onClick={closeMenu}>
About
</a>


<a href="#services" onClick={closeMenu}>
Services
</a>


<a href="#portfolio" onClick={closeMenu}>
Portfolio
</a>


<a href="#contact" onClick={closeMenu}>
Contact
</a>


</div>





<button

className="menu-btn"

onClick={()=>setOpen(!open)}

aria-label="Toggle navigation"

>


<span></span>
<span></span>
<span></span>


</button>




</header>

);

}


export default Navigation;