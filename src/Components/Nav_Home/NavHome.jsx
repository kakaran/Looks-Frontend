import React from "react";
import Navbar from "../Navbar/Navbar";
import image1 from "../../Images/homeBackground.png";
import "./NavHome.css";
import { useNavigate } from "react-router-dom";


export default function NavHome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="backgroundcolor">
      <div className="BackgroundImage">
        <img src={image1} alt="" />
      <div className="navbaranddata">
        <Navbar />
        <div className="data">
          <h1>Opulence <span style={{fontSize : "45px"}}>for your</span> Body</h1>
          <p>
            Nestled in the shadows of the catalinas, Imagen Salon & Day Spa
            offers top of the line service in an unbelievably relaxing setting
          </p>
          <button onClick={() =>{
            navigate("/services")
          }}>schedule an appointment</button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
