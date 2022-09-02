import React from "react";
import "./Experience.css"
import experienceimg from "../../Images/Experience.jpg"

export default function Experience() {
  return (
    <>
      <div className="experienceContainer">
        <img src={experienceimg} alt="" />
        <div className="experienceDetailCantainer">
          <h2>beautifying looks</h2>
          <h1>for over 10 years</h1>
          <p>
            We're honored to have awards presented in 2015,in First Place for
            Best Hair Salon and Second Place for Best Day Spa and Staff pick for
            Best Hair Salon by The Explorer "Best of the Northwest"
          </p>
          <div className="info">
            <div className="infoservices">
              <h1>6.7k</h1>
              <p>square feet</p>
            </div>
            <div className="infoservices">
              <h1>25+</h1>
              <p>expert stylists</p>
            </div>
            <div className="infoservices">
              <h1>10+</h1>
              <p>years in service since 2010</p>
            </div>
          </div>
          <button>Schedule an appointment</button>
        </div>
      </div>
    </>
  );
}
