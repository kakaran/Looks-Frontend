import React from "react";
import "./Footer.css";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { WiTime9 } from "react-icons/wi";

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
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Contact</a>
                <a href="">About</a>
              </div>
            </div>
            <div className="contact">
              <h1>Contact Us</h1>
              <div className="contactdetail">
                <p className="contactlogo">
                  <MdLocationOn />
                </p>
                <p style={{ width: "150px" }}>
                  72 Main Drive, Calibry, Florida 20304
                </p>
              </div>
              <div className="contactdetail">
                <p className="contactlogo">
                  <BsTelephone />
                </p>
                <p style={{ width: "150px" }}>
                  Helpline 24/7 <br />
                  +1 (700) 111 00 222
                </p>
              </div>
              <div className="contactdetail">
                <p className="contactlogo">
                  <WiTime9 />
                </p>
                <p style={{ width: "150px" }}>
                  Mon to Friday <br />
                  9:00 am to 7:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
