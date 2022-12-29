import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./About.css";
import about from '../../Images/about.png';
import about2 from '../../Images/about2.png';
import {BsArrowRightShort} from 'react-icons/bs';

export default function About() {
  return (
    <>
    <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
    </div>
        <div className="aboutContainer">
          <h1>ABOUT US</h1>
            <div className="aboutUs">
              <div className="info1">
                <div className="aboutpic">
                  <img src={about} alt="" />
                </div>
                <div className="aboutInfo1">
                  <h4>All procedures are performed <br />
                    only by professionals</h4>
                    <br />
                  <p>
                    Looks is a popular online beauty salon and store that 
                    sells all cosmetics products and services in order to 
                    nature your skin for your own way.
                    <br /><br />
                    Our service masters, cosmetologist are trained by the 
                    best beauty trainers and follow the latest trends in the 
                    fashoin world.
                    <br /><br />
                    We use the most effective techniques and use professional
                    cosmetics from the India's leading brands.
                    This allows us to guarantee not only an excellent result, 
                    but also absolute safety for your health.
                  </p>
                </div>
              </div>
              <div className="info2">
                <div className="aboutInfo2">
                  <h4>The main principle in our work <br />
                    is work for the result</h4>
                    <br />
                  <p>
                    The Looks salon is a territory of grace,
                    aesthetics, comfort and coziness.<br />
                    We are ready to please you with an 
                    impeccable quality of services, products 
                    and offer the best services in the beauty industry.
                  </p>
                  <div className="sign">
                    <a  style={{ color: "#fff"}} href='/login'>Sign up<sub><BsArrowRightShort/></sub></a>
                  </div>
                </div>
                <div className="aboutpic2">
                  <img src={about2} alt="" />
                </div>
              </div>
            </div>
        </div>
        <div><Footer /></div>
    </>
  )
}