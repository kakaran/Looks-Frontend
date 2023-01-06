import React, { useState, useEffect } from "react";
import image2 from "../../Images/LooksLogo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const [activevalue, setActiveValue] = useState("#home");
  const [inoutDirection, setDirection] = useState("/login");
  // const [displayvalue , setDisplayValue] = useState(false);
  const [inout, setInout] = useState();
  const [render, setRender] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setInout("Logout");
      setDirection("/");
    } else {
      setInout("Login");
      setDirection("/login");
    }
    setRender(0);
  }, [render]);

  function handleChange() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      navigate("/")
      window.location.reload();
    }
    setRender(1);
  }

  return (
    <>
      <div className="Navbar_Container">
        <img className="Navbar_Logo" src={image2} alt="" />
        <div className="navbar_Hamburger">
          <Hamburger
            color="#572138"
            rounded
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                setmenu(true);
              } else {
                // close a menu
                setmenu(false);
              }
            }}
          />
        </div>
        <div
          className={
            menu ? "navbar_Link_Mobile_Container" : "navabar_Link_Container"
          }
        >
          <Link
            to="/"
            onClick={() => {
              setActiveValue("#");
            }}
            className={activevalue === "#" ? "active" : " "}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setActiveValue("#about");
            }}
            className={activevalue === "#about" ? "active" : " "}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setActiveValue("#contact");
            }}
            className={activevalue === "#contact" ? "active" : " "}
          >
            Contact
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setActiveValue("#services");
            }}
            className={activevalue === "#services" ? "active" : " "}
          >
            Services
          </Link>
          <Link
            to="/product"
            onClick={() => {
              setActiveValue("#product");
            }}
            className={activevalue === "#product" ? "active" : " "}
          >
            Products
          </Link>
          {localStorage.getItem("token") ? <Link
            to="/cart"
            onClick={() => {
              setActiveValue("#insta");
            }}
            className={activevalue === "#insta" ? "active" : " "}
          >
            <FaShoppingCart style={{ fontSize: "22px" }} />
          </Link> : ""}
          <Link
            to={inoutDirection}
            className="navbar_btn"
            onClick={() => {
              handleChange();
            }}
          >
            {inout}
          </Link>
        </div>
      </div>
    </>
  );
}
