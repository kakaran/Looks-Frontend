import React ,{useState}from 'react'
import image2 from "../../Images/LooksLogo.png"
import { AiOutlineHome, AiOutlineInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import {Link} from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import "./Navbar.css";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const [activevalue , setActiveValue] =useState("#")


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
        <Link to="/" onClick={() =>{setActiveValue("#")}} className = { activevalue === "#" ? "active" : " " }><AiOutlineHome style={{fontSize: "22px"}} /></Link>
        <Link to="/" onClick={() =>{setActiveValue("#about")}} className = { activevalue === "#about" ? "active" : " " }>About</Link>
        <Link to="/" onClick={() =>{setActiveValue("#services")}} className = { activevalue === "#services" ? "active" : " " }>Services</Link>
        <Link to="/" onClick={() =>{setActiveValue("#contact")}} className = { activevalue === "#contact" ? "active" : " " }>Contact</Link>
        <Link to="/" onClick={() =>{setActiveValue("#number")}} className = { activevalue === "#number" ? "active" : " " }><BsTelephone /> 520.742.0040</Link>
        <Link to="/" onClick={() =>{setActiveValue("#insta")}} className = { activevalue === "#insta" ? "active" : " " }><AiOutlineInstagram style={{fontSize: "22px"}}/></Link>
        <Link to="/" className='navbar_btn'>Book Online</Link>
      </div>
      </div>

    </>
  )
}
