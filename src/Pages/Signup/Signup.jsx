import React from 'react';
import {Link} from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import "./Signup.css"
import { useState } from 'react';

export default function Signup() {
  const [passwordtype, setPasswordType] = useState("password");
  const [passvalue ,setPassvalue] = useState(true)
  const [C_passvalue ,setC_Passvalue] = useState(true)
  const [passwordeye, setPasswordEye] = useState(<AiOutlineEye />);


  const ChangeC_PasswordType = () =>
  {
    if(C_passvalue)
    {
      setPasswordType("text");
      setPasswordEye(<AiOutlineEyeInvisible/>)
      setPassvalue(false)
    }else{  
      setPasswordType("password");
      setPasswordEye(<AiOutlineEye/>)
      setPassvalue(true)
    }
  }

  const ChangePasswordType = () =>
  {
    if(passvalue)
    {
      setPasswordType("text");
      setPasswordEye(<AiOutlineEyeInvisible/>)
      setPassvalue(false)
    }else{  
      setPasswordType("password");
      setPasswordEye(<AiOutlineEye/>)
      setPassvalue(true)
    }
  }
  return (
    <>
        <div className="signup_container">
            <div className="signup_Form_Container">
              <h1>Sign up with email</h1>
                <label htmlFor="name"><small>Name</small></label>
                <input type="text"  id='name' placeholder='Enter Full Name '/>
                <label htmlFor="email"><small>Email Address</small></label>
                <input type="email"  id='email' placeholder='Enter the email'/>
                <label htmlFor="password"><small>New Password</small></label>
                <div className="N-password_holder">
                <input className="N-password_holder" type="password"  id='password' placeholder='Enter Password'/>
                <span><AiOutlineEye/></span>
                </div>
                <label htmlFor="c-password"><small>New Confirm Password</small></label>
                <div className="N-password_holder">
                <input type={passwordtype}  id="c-password"  placeholder='Enter the Confirm Password ' />
                <span onClick={() =>{ChangePasswordType()}}>{passwordeye}</span>
                </div>
                <span className='agree'><input type="checkbox" id="agree" /><label htmlFor="agree"> I agree to platform's Terms of Service and Privacy policy</label></span>
                <button> Sign up</button>
                <span className='login_redirect'>Already a member? <Link to="/login">Login</Link></span>
            </div>
        </div>
    </>
  )
}
