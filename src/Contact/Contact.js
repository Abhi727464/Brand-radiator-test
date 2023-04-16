import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

const Contact = ({
  name,
  email,
  mobile,
  city,
  handleSubmit,
  setName,
  setEmail,
  setMobile,
  setCity,
}) => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <h1>Contact US</h1>
        <div className="contact-container">
          <div className="contact">
            <form action="" name="submit-to-google-sheet">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Your Number"
                required
              />
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Your City"
                required
              />

              <button
                class="btn-hover color-9"
                onClick={handleSubmit}
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
