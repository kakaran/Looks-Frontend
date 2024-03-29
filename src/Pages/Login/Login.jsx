import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../Images/LooksLogo.png";
import "./Login.css";

export default function Login() {
  const [useremail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordeye, setPasswordEye] = useState(<AiOutlineEyeInvisible />);
  const [passwordtype, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const user = {
    useremail,
    password,
  };

  const handleLogin = async () => {
    await axios
      .post("https://looks-0hws.onrender.com/api/Login", user)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userid", response.data.userid);
          toast.success(`Login Successfully`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        toast.error(`${error.request.response}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleforgetpassword = async () => {
    await axios
      .post("https://looks-0hws.onrender.com/api/EmailCheck", { useremail })
      .then((response) => {
        toast.success(`${response.request.response}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/resetpassword/" + useremail);
        }, 3000);
      })
      .catch((error) => {
        toast.error(`${error.request.response}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const ChangePasswordType = () => {
    if (passwordtype === "password") {
      setPasswordType("text");
      setPasswordEye(<AiOutlineEye />);
    } else {
      setPasswordType("password");
      setPasswordEye(<AiOutlineEyeInvisible />);
    }
  };

  return (
    <>
      <div className="Login_Container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="login_form_container">
          <h1>Welcome Back</h1>
          <label htmlFor="loginemail"> Your email</label>
          <input
            type="email"
            id="loginemail"
            placeholder="name@domain.com"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <label htmlFor="loginpassword">Password</label>
          <div className="N-password_holder">
            <input
              type={passwordtype}
              id="loginpassword"
              placeholder="at least 8 characters"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span
              onClick={() => {
                ChangePasswordType();
              }}
            >
              {passwordeye}
            </span>
          </div>
          <p
            className="login_fpassword"
            onClick={() => {
              handleforgetpassword();
            }}
          >
            <small>Forgot password?</small>
          </p>
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
