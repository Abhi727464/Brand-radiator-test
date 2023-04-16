import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container hero-section">
        <div className="main-text">
          <h1>UPGRADE YOUR BODY AT <br /> GYMSO FITNESS</h1>
          <div className="btn-container">
            <button
              class="btn-hover color-3"
              onClick={() => navigate("/about")}
            >
              ABOUT US
            </button>
            <button
              class="btn-hover color-9"
              onClick={() => navigate("/contact")}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
