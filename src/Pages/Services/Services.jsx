import React from "react";
import "./Services.css";
import service1 from "../../Images/service1.png"
import service2 from "../../Images/service2.png"
import service3 from "../../Images/service3.png"

export default function Services() {
  return (
    <>
      <div className="serviceContainer">
        <div className="Servicedetail">
          <h2>excellent services</h2>
          <h1>we are proud of</h1>
          <p>
            We celebrate the importantance of tadition while ecientically
            embracing the envolving world of saion care. From walk-ins to
            wedding parties, a simple haricut to a spa-ntaneous retreat, we
            welcome you to find your new image with us.
          </p>
        </div>
        <div className="serviceCardsContainer">
          <div className="serciceCard">
            <img src={service1} alt="" />
            <h2>Salon</h2>
            <p>
              Our 20+ stylists palce great emphasis on getting to know who you
              are and what you're looking for, sit back, relax, and enjoy salon
              day for the first time in your life.
            </p>
            <button>Booke Online</button>
          </div>
          <div className="serciceCard">
            <img src={service2} alt="" />
            <h2>Shop now</h2>
            <p>
              Looks offers stunning beauty designs and layouts for cosmetics
              shop, make up and beauty spa with multiple styles. Build Your
              Beauty Easily with Looks
            </p>
            <button>Buy Product</button>
          </div>
          <div className="serciceCard">
            <img src={service3} alt="" />
            <h2>Special Packages</h2>
            <p>
              Weve packaged bundles of joy to keep you feling special and
              looking spectacular for any occasion, Don't see a package for you?
              Allow us to build an experience around you
            </p>
            <button>See Special Packages</button>
          </div>
        </div>
      </div>
    </>
  );
}
