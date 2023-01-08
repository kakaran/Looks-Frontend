import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { WiTime9 } from "react-icons/wi";

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13993.59689760866!2d77.11820640432131!3d28.737495151524843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013e7c658b6f%3A0xc24e2009b7c7888c!2sAmazing%20Looks%20Makeover!5e0!3m2!1sen!2sin!4v1673181627738!5m2!1sen!2sin"
                width="1000"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
