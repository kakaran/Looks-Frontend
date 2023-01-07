import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { WiTime9 } from "react-icons/wi";
import map from "../../Images/map.png";

export default function Contact() {
  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="conContainer">
        <h1>Contact Us</h1>
        <div className="con_container">
          <div className="con_options">
            <div className="con_option">
              <MdOutlineEmail className="con_option-icon" />
              <h4>Email</h4>
              <h5>Looks@example.com</h5>
              <h5>Send an Email</h5>
            </div>
            <div className="con_option">
              <BsTelephone className="con_option-icon" />
              <h4>Phone</h4>
              <h5>+91 (123) 456 7891</h5>
              <h5>Make a Call</h5>
            </div>
            <div className="con_option">
              <WiTime9 className="con_option-icon" />
              <h4>Timing</h4>
              <h5>Mon to Sun</h5>
              <h5>10:30 am to 8:00 pm</h5>
              <h6>Tuesday is an off</h6>
            </div>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <div>
            <h2>Get In Touch</h2>
            <div className="head">
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="msg"
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
