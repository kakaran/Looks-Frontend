import React, { useState, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { WiTime9 } from "react-icons/wi";
import { Calendar } from "react-date-range";
import { useNavigate, useParams } from "react-router-dom";
import format from "date-fns/format";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./ServiceBooked.css";
import axios from "axios";
import Swal from 'sweetalert2'


const ServiceBooked = () => {
  const navigate = useNavigate()
  const [selectdate, setDate] = useState(
    new Date().toLocaleString("en-US", { day: "2-digit" })
  );
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "long" })
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [serviceDetail , setServiceDetail] = useState("");
  const { id } = useParams();

  const prodata = {
    service_id: id,
    userid: localStorage.getItem("userid"),
  };

  const [deldetail, setdeldetail] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const servicedataload = async () => {
      try {
        const detail = (await axios.post("http://localhost:4001/service/singleService",{
            data: {
              _id: prodata.service_id,
            },
          })
        ).data;
        setServiceDetail(detail)
      } catch (error) {
        console.log(error);
      }
    };
    servicedataload();
  }, []);

  const bookservice = async () => {
    try {
     const data =(await axios.post("http://localhost:4001/serviceBooking/booking", {
          data: {
            mon: month,
            date: selectdate,
            service_id: prodata.service_id,
            userId: prodata.userid,
            name: deldetail.name,
            email: deldetail.email,
            phone: deldetail.phone,
          },
        })
      ).data;
      Swal.fire({
        title: 'Service Booked',
        text: "Salon team will contact you in under 15 mins",
        showClass: {
          popup: 'animate__animated animate__bounceInRight'
        },
        hideClass: {
          popup: 'animate__animated animate__bounceOutLeft'
        }
      })
      navigate("/services")
    } catch (error) {
      console.log(error);
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSelect = (date) => {
    setDate(format(date, "dd"));
    setMonth(months[format(date, "m")]);
    setYear(format(date, "yyyy"));
  };

  const Onchangedeldetail = (e) => {
    setdeldetail({ ...deldetail, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="service_container">
        <div className="service_detail">
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
        <div className="booking_information">
          <div className="Inforamtion">
            <h2>Book a Service</h2>
            <form action="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                autoComplete="off"
                onChange={Onchangedeldetail}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                autoComplete="off"
                onChange={Onchangedeldetail}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                placeholder="Phone Number"
                autoComplete="off"
                onChange={Onchangedeldetail}
              />
            </form>
            <Calendar date={new Date()} minDate={new Date()} onChange={handleSelect} />
          </div>
        </div>
        <div className="serviceBooking_Detail">
          <div className="checkout ">
            <div className="box">
              <div className="nameservice">
                <span>
                  <p>Service</p>
                </span>
                <p>{serviceDetail.information}</p>
              </div>
              <span>
                <p>Total: ₹ {serviceDetail.cost}</p>
                <p></p>
              </span>
              <button onClick={bookservice}>Booked</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceBooked;
