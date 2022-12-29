import React, { useState } from 'react'
import image2 from "../../Images/LooksLogo.png"
import { AiOutlineHome,  } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import "./Navbar.css";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const [activevalue, setActiveValue] = useState("#")
  console.log(activevalue);

  return (
    <>
      <div className="Navbar_Container">
        <img className="Navbar_Logo" src={image2} alt="" />
        <div className="navbar_Hamburger">
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
        <div className={menu ? "navbar_Link_Mobile_Container" : "navabar_Link_Container"}>
          <Link to="/" onClick={() => { setActiveValue("#") }} className={activevalue === "#" ? "active" : " "}><AiOutlineHome style={{ fontSize: "22px" }} /></Link>
          <Link to="/about" onClick={() => { setActiveValue("#about") }} className={activevalue === "#about" ? "active" : " "}>About</Link>
          <Link to="/contact" onClick={() => { setActiveValue("#contact") }} className={activevalue === "#contact" ? "active" : " "}>Contact</Link>
          <Link to="/services" onClick={() => { setActiveValue("#services") }} className={activevalue === "#services" ? "active" : " "}>Services</Link>
          <Link to="/product" onClick={() => { setActiveValue("#product") }} className={activevalue === "#product" ? "active" : " "}>Products</Link>
          <Link to="/cart" onClick={() => { setActiveValue("#insta") }} className={activevalue === "#insta" ? "active" : " "}><FaShoppingCart style={{ fontSize: "22px" }} /></Link>
          <Link to="/login" className='navbar_btn'>Login</Link>
        </div>
      </div>
    </>
  )
}
