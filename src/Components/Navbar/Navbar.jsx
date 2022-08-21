import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
// import Hamburger from "hamburger-react";
import { Sling as Hamburger } from 'hamburger-react'
import image2 from "../../Images/LooksLogo.png"

export default function Navbar() {
  const [menu, setmenu] = useState(false);

  return (
    <>
      <div className="NavbarContainer">
        <div>
          <img className="NavbarLogo" src={image2} alt="" />
        </div>
        <div className="navbarhamburgerConttainer">
          <ul className={menu ? "anchoremobile" : "anchoreTages"}>
            <li>
              <a href="">
                <AiOutlineHome />
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">
                <BsTelephone /> 520.742.0040
              </a>
            </li>
            <li className="buttoninsta">
              <a href="">
                <AiOutlineInstagram />
              </a>
            </li>
            <li className="buttonbook">
              <a href="">book Online</a>
            </li>
          </ul>
          <div className="hamburger">
          <a href="" style={{textDecoration: "none",
        color: "#572138",padding : "0px 5px"}}>
                <BiPhoneCall/> 520.742.0040
              </a>
              <hr style={{ width : " 1px", height:"25px", display : "inline-block",border : "none", borderLeft : "3px solid #572138" }}/>
            <Hamburger
            color="#572138" rounded
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setmenu(true);
                } else {
                  // close a menu
                  setmenu(false)
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
