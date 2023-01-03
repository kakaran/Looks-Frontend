import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import { BiRupee } from "react-icons/bi";
import "./Service_Page.css";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const [service, setService] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadpackages = async () => {
      await axios
        .get("http://localhost:4001/service/services", {})
        .then((response) => {
          setService(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadpackages();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="Services_PageContainer">
        <h1>Services</h1>
        <h3>Packages</h3>
        <div className="packages_Container">
          {service.map((prod) => {
            return (
              <div className="Package_Card">
                <img src={`http://localhost:4001${prod.image}`} alt="" />
                {/* <p>{prod.Servicename}</p> */}
                <p>{prod.information}</p>
                <p>
                  <sub>
                    <BiRupee />
                  </sub>
                  {prod.cost}
                </p>
                <button
                  onClick={() => {
                    navigate(`/service_Booked/${prod._id}`);
                  }}
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
