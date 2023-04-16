import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./UserData.css";

const UserData = ({ users }) => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/admin");
  };
  return (
    <>
      <h1 className="newuser">NEW CUSTOMERS DATA</h1>
      <div className="view-container">
    
          <div className="table-responsive">
            <table className="table">
              <thead className="tablehead">
                <tr className="heading">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.name}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
      <div style={{margin:"10px auto", width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <button class="btn-hover color-9" onClick={logOut} type="submit">
            LOGOUT
      </button>
      </div>
     
    </>
  );
};

export default UserData;
