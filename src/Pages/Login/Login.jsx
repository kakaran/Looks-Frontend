import React from 'react';
import {Link} from "react-router-dom";
import "./Login.css"

export default function Login() {
  return (
    <>
        <div className="Login_Container">
          <div className="login_form_container">
            <h1>Welcome Back</h1>
            <label htmlFor="loginemail"> Your email</label>
            <input type="email"  id="loginemail" placeholder='name@domail.com'/>
            <label htmlFor="loginpassword">Password</label>
            <input type="password" id="loginpassword" placeholder='at least 8 characters' />
            <Link className='login_fpassword' to=""><small>Forgot password?</small></Link>
            <button>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </div>
    </>
  )
}
