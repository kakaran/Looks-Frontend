import React from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState } from 'react';


export default function ForgetPassword() {
    const [passwordtype, setPasswordType] = useState("password");
  const [c_passwordtype, setC_PasswordType] = useState("password");
  const [passwordeye, setPasswordEye] = useState(<AiOutlineEyeInvisible/>);
  const [c_passwordeye, setC_PasswordEye] = useState(<AiOutlineEyeInvisible/>);
  const [confirmPassword, setConfirmPassword] =useState();
  const [password, setPassword] =useState();
  const [ishovering, setHovering] = useState(false);
    
  const user = {
    password,
    confirmPassword,
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
        <div className="Forget_password_container">
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
        </div>
    </>
  )
}
