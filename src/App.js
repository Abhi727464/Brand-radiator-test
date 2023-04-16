import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import About from "./About/About";
import Admin from "./Admin/Admin";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import UserData from "./UserData/UserData";
import { ToastContainer, toast } from "react-toastify";

function App() {

  const getData = ()=>{
    let data =   localStorage.getItem("users")
     if(data){
      return JSON.parse(data)
     }
    }

  const [users,setUsers] = useState(getData())

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setMobile] = useState("")
  const [city,setCity] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("btn clicked");
    let user ={name,email,mobile,city}
    setUsers([...users,user]) 
    setName("");
    setEmail("");
    setMobile("")
    setCity("")
    toast.success('Data Send Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users))
  },[users]);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route  path="/admin" element={<Admin  users={users}/>}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route  path="/contact" element={<Contact name={name} email={email} mobile={mobile} city={city} handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setMobile={setMobile} setCity={setCity}/>}></Route>
          <Route  path="/users" element={<UserData  users={users}/>}></Route>
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
