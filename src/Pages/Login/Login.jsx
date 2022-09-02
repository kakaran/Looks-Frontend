import React from 'react';
import bgimage from "../../Images/Experience.jpg"
import {Link} from "react-router-dom";
import "./Login.css"

export default function Login() {
  return (
    <>
        <div className="Login_Container">
            <img src={bgimage} alt="" className='login_bgimage'/>
            <Link to="/signup">Signup</Link>
        </div>
    </>
  )
}
