import React from "react";
import Navbar from "../Navbar/Navbar";
import image1 from "../../Images/homeBackground.png";
import "./NavHome.css";

export default function NavHome() {
  return (
    <>
      <div className="backgroundcolor"></div>
      <div className="BackgroundImage">
        <img src={image1} alt="" />
      </div>
      <div className="navbaranddata">
        <Navbar />
        <div className="data">
          <h1>Opulence <span style={{fontSize : "45px"}}>for your</span> Body</h1>
          <p>
            Nestled in the shadows of the catalinas, Imagen Salon & Day Spa
            offers top of the line service in an unbelievably relaxing setting
          </p>
          <button>schedule an appointment</button>
        </div>
      </div>
      
    </>
  );
}
