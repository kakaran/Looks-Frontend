import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);
  const userid = {
    id: localStorage.getItem("userid"),
  };
  console.log(userid);

  useEffect(() => {
    try {
      const productdataload = async () => {
        const data = (
          await axios.post("http://localhost:4001/cart/cartproduct", { userid })
        ).data;
        setCartdata(data);
      };
      productdataload();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(cartdata);

  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="cartContainer">
        <div className="shopingCart Pro_width">
          {cartdata.map((value) => {  
            return (
              <Link to={`/product/${value.product._id}`}>
              <div className="product">
                <img src={`http://localhost:4001${value.product.image}`} alt="product" />
                <div className="detail">
                  <div className="name">
                    <h3>{value.product.name}</h3>
                    <button>X</button>
                  </div>
                  <div className="qutPrice">
                    <p>Qty : {value.qty}</p>
                    <h3>{value.product.price}</h3>
                  </div>
                </div>
              </div>
              </Link>
            )
          })}
        </div>
        <div className="checkout Pro_width">
          <div className="box"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
