import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import "./Signup.css"
import { useState } from 'react';

export default function Signup() {
  const [passwordtype, setPasswordType] = useState("password");
  const [c_passwordtype, setC_PasswordType] = useState("password");
  const [passwordeye, setPasswordEye] = useState(<AiOutlineEyeInvisible/>);
  const [c_passwordeye, setC_PasswordEye] = useState(<AiOutlineEyeInvisible/>);
  const [checkvalue ,setCheckValue] = useState(false);
  const [name , setName] = useState();
  const [useremail , setUserEmail] =useState();
  const [password , setPassword] =useState();
  const [confirmPassword , setConfirmPassword] =useState();
  const [ishovering , setHovering] = useState(false);
  const navigate = useNavigate();

  const handleSignup =  async () => {
    const user ={
      name, 
      useremail,
      password,
      confirmPassword,
    };
    if(!checkvalue)
    {
      toast.error('Kindly please fill the all blanks !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        console.log("hi");
    }else{


    await axios.post("http://localhost:4001/api/Signup",user).then((response)=>{
        toast.success(`${response.request.response}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          navigate("/login");
      }).catch((error)=>{
      toast.error(`${error.request.response}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });    
      });
    }
  }
  const ChangeC_PasswordType = () =>
  {
    if(c_passwordtype === "password")
    {
      setC_PasswordType("text");
      setC_PasswordEye(<AiOutlineEye />)
    }else{  
      setC_PasswordType("password");
      setC_PasswordEye(<AiOutlineEyeInvisible/>)
    }
  }

  const ChangePasswordType = () =>
  {
    if(passwordtype === "password")
    {
      setPasswordType("text");
      setPasswordEye(<AiOutlineEye/>)
    }else{  
      setPasswordType("password");
      setPasswordEye(<AiOutlineEyeInvisible/>)
    }
  }
  return (
    <>
        <div className="signup_container">
            <div className="signup_Form_Container">
              <h1>Sign up with email</h1>
                <label htmlFor="name"><small>Name</small></label>
                <input type="text"  id='name' placeholder='Enter Full Name' onChange={(e) =>{
                  setName(e.target.value)
                }}/>
                <label htmlFor="email"><small>Email Address</small></label>
                <input type="email"  id='email' placeholder='Enter the email' onChange={(e) =>{
                  setUserEmail(e.target.value)
                }}/>
                <label htmlFor="password"><small>New Password</small></label>
                <div className="N-password_holder">
                <input type={c_passwordtype}  id='password' placeholder='Enter Password' onMouseEnter={() =>{setHovering(true)}} onMouseLeave={() =>{setHovering(false)}} onChange={(e) =>{
                  setPassword(e.target.value)
                }}/>
                <span onClick={() =>{ChangeC_PasswordType()}}>{c_passwordeye}</span>
                </div>
                <div className={ ishovering ? "password_format":"hide"}>
                  <ul>
                    <li><small>Minimum eight characters</small></li>
                    <li><small>At least one uppercase letter</small></li>
                    <li><small>One lowercase letter </small></li>
                    <li><small>One number</small></li>
                  </ul>
                </div>
                <label htmlFor="c-password"><small>New Confirm Password</small></label>
                <div className="N-password_holder">
                <input type={passwordtype}  id="c-password"  placeholder='Enter the Confirm Password ' onChange={(e) =>{
                  setConfirmPassword(e.target.value)
                }}/>
                <span onClick={() =>{ChangePasswordType()}}>{passwordeye}</span>
                </div>
                <span className='agree'><input type="checkbox" id="agree" onChange={() =>{setCheckValue(!checkvalue)}}/><label htmlFor="agree"> <small>I agree to platform's Terms of Service and Privacy policy</small></label></span>
                <button onClick={() =>{
                  handleSignup()
                }}> Sign up</button>
                <span className='login_redirect'>Already a member? <Link to="/login">Login</Link></span>
            </div>
            <ToastContainer/>
        </div>
    </>
  )
}
