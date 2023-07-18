import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import { BiRupee } from "react-icons/bi";
import "./Service_Page.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const ServicePage = () => {
  const [service, setService] = useState([]);
  const navigate = useNavigate();
  let userid = localStorage.getItem("userid");

  useEffect(() => {
    const loadpackages = async () => {
      await axios
        .get("https://looks-0hws.onrender.com/service/services", {})
        .then((response) => {
          setService(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadpackages();
    window.scrollTo(0, 0)
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
                <img src={`https://looks-0hws.onrender.com${prod.image}`} alt="" />
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
                    userid ? navigate(`/service_Booked/${prod._id}`)
                    : toast.info('🛡️ Kindly Please Login', {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
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
      <ToastContainer/>
    </>
  );
};

export default ServicePage;
