import React from "react";
import "./Footer.css";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { WiTime9 } from "react-icons/wi";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footercontainer">
        <div className="BackgroundFlowerimage"></div>
        <div className="footerinformation">
          <div className="footernewletter">
            <h1>Newsletter Signup</h1>
            <div className="newsletterinput">
              <input type="text" name="" id="" placeholder="Enter your email" />
              <button>
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="aboutLinksContactContainer">
            <div className="aboutinfo">
              <h1>About Us</h1>
              <p>
                Looks – a popular online beauty salon and store that sells all
                cosmetics products and services in order to nature your skin for
                your own way.
              </p>
              <button>
                <span>
                  <BsArrowRight />
                </span>
                Make Appointment
              </button>
            </div>
            <div className="impotant">
              <h1>Important Links</h1>
              <div className="importantlinks">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
              </div>
            </div>
            <div className="contact">
              <h1>Contact Us</h1>
              <div className="contactdetail">
                <p className="contactlogo">
                <sub><MdLocationOn /></sub>
                </p>
                <p style={{ width: "150px" }}>
                  F-9 Sec-16,Rohini,Delhi - 110089
                </p>
              </div>
              <div className="contactdetail">
                <p className="contactlogo">
                <sub><BsTelephone /></sub>
                </p>
                <p style={{ width: "150px" }}>
                  Helpline 24/7 <br />
                  +91 (123) 456 7891
                </p>
              </div>
              <div className="contactdetail">
                <p className="contactlogo">
                <sub><WiTime9 /></sub>
                </p>
                <p style={{ width: "150px" }}>
                  Mon to Sun <br />
                  10:30 am to 8:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
