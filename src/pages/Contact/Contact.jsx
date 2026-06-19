import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();


    setError("");
    setSuccess("");


    // Empty field validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {

      setError("Please fill all fields");
      return;

    }


    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(formData.email)) {

      setError("Please enter a valid email address");
      return;

    }



    // Success message

    setSuccess("Your message has been sent successfully!");


    // Clear form

    setFormData({

      name:"",
      email:"",
      message:""

    });


  };



  return (

    <section className="contact" id="contact">


      <h2>Contact Us</h2>



      <form 
      className="contact-form"
      onSubmit={handleSubmit}
      >


        <input

          type="text"

          name="name"

          placeholder="Your Name"

          aria-label="Name"

          value={formData.name}

          onChange={handleChange}

        />



        <input

          type="email"

          name="email"

          placeholder="Your Email"

          aria-label="Email"

          value={formData.email}

          onChange={handleChange}

        />



        <textarea

          name="message"

          placeholder="Your Message"

          aria-label="Message"

          rows="5"

          value={formData.message}

          onChange={handleChange}

        ></textarea>




        <button type="submit">

          Send Message

        </button>




        {
          error &&

          <p className="error">

            {error}

          </p>

        }




        {
          success &&

          <p className="success">

            {success}

          </p>

        }



      </form>



    </section>

  );

}


export default Contact;