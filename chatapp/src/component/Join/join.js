
import React, { useState } from 'react'
import "./join.css";
import logo from "../../images/logo.jpg";
import {Link} from "react-router-dom";
let user;
const senduser=()=>{
     user= document.getElementById('joinInput').value;
     document.getElementById('joinInput').value="";
   }
const Join = () => {
 
const [name, setName] = useState("");
  return (
    <div className="JoinPage">
    <div className="JoinContainer">
    <img src={logo} alt="logo" />
      <h1>Chat App</h1>
     <input onChange={(e)=>
     setName(e.target.value)} placeholder="Enter your name" type="text" id="joinInput" />
     <Link onClick={(event)=>!name
      ? event.preventDefault():null
     } to="/chat"><button className="joinbtn" onClick={senduser}>Login</button></Link>
      </div>
    </div>
  )
}

export default Join
export { user }
