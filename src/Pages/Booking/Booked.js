import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./Booking.css";

const Booked = () => {
  const [cartdata, setCartdata] = useState([]);
  const [totalprice, setTotalprice] = useState();
  const [deldetail, setdeldetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });
  const userid = {
    id: localStorage.getItem("userid"),
  };
  useEffect(() => {
    try {
      const productdataload = async () => {
        const data = (
          await axios.post("http://localhost:4001/cart/cartproduct", { userid })
        ).data;
        console.log(data);
        setCartdata(data.detail);
        setTotalprice(data.totalvalue);
      };
      productdataload();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const OrderConfirmed = async () => {
    try {
      const data = (
        await axios.post("http://localhost:4001/orders/order", {
          data: {
            userId: userid,
            totalprice: totalprice+50,
            name: deldetail.name,
            email: deldetail.email,
            phone: deldetail.phone,
            address: deldetail.address,
            pincode: deldetail.pincode,
          },
        })
      ).data;
    } catch (error) {
      console.log(error);
    }
  };

  const Onchangedeldetail = (e) => {
    setdeldetail({ ...deldetail, [e.target.name]: e.target.value });
  };

  console.log(deldetail);
  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="bookingcontainer">
        <h1>Booking</h1>
        <div className="Bookingtasks">
          <div className="products">
            <div className="productheader">
              <h3>Index</h3>
              <h3>Product Name</h3>
              <h3>Qty</h3>
              <h3>Price</h3>
            </div>
            {cartdata.map((value, index) => {
              return (
                <div className="productdetail" key={index}>
                  <p>{index + 1}</p>
                  <p>{value.product.name}</p>
                  <p>{value.qty}</p>
                  <p>₹{value.product.price}</p>
                </div>
              );
            })}
          </div>
          <div className="Inforamtion">
            <h2>Delivery Address</h2>
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
                type="number"
                name="phone"
                id="phone"
                required
                placeholder="Phone Number"
                autoComplete="off"
                onChange={Onchangedeldetail}
              />
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="10"
                required
                placeholder="Address"
                autoComplete="off"
                onChange={Onchangedeldetail}
              ></textarea>
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                pattern="[0-9]{6}"
                required
                maxlength="6"
                placeholder="Pincode"
                autoComplete="off"
                onChange={Onchangedeldetail}
              />
            </form>
          </div>
          <div className="payment">
            <div className="box">
              <span>
                <p>Subtotal</p>
                <p>₹{totalprice}</p>
              </span>
              <span>
                <p>Shipping Fee</p>
                <p>₹{totalprice == 0 ? totalprice : 50}</p>
              </span>
              <span>
                <p>Total: </p>
                <p>₹{totalprice == 0 ? totalprice : 50 + totalprice}</p>
              </span>
              <button onClick={OrderConfirmed}>confirmed</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booked;
