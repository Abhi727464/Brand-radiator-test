import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import axios from "axios";
import Footer from "../Footer/Footer";
const About = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setUserData(res.data.users);
    });
  }, []);
  console.log(userData);
  return (
    <>
      <Navbar />
      <div className="card-container">
        <h1>OUR FITNESS FREAKS</h1>
        <div className="cards">
        {userData.map((user) => {
          return (
            <div class="card">
              <div className="img-div">
              <img
                src={user.image}
                alt="Avatar"
              
              />
              </div>
             
              <div class="about-container">
                <h4>
                  <b>{user.firstName} {user.lastName}</b>
                </h4>
                <div style={{display:"flex", justifyContent:"space-between",marginTop:"5px"}}>
                <p> <b>Mobile:</b> {user.phone}</p>
                <p> <b>City:</b> {user.address.city}</p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between",marginTop:"5px"}}>
                <p> <b>Age:</b> {user.age}</p>
                <p> <b>Height:</b> {user.height}</p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between",marginTop:"5px"}}>
                <p> <b>Weight:</b> {user.weight}</p>
                <p> <b>Join:</b> {user.birthDate}</p>
                </div>
              </div>
            </div>
          );
        })}
        
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
