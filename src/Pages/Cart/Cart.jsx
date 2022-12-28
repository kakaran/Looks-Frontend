import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);
  const [deletedata, setDeletedata] = useState()
  const userid = {
    id: localStorage.getItem("userid"),
  };
  const cartdelete = {
    id : userid.id,
    product : deletedata
  }
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


  const deleteproduct = async () =>{
    try {
      console.log(cartdelete);
      const data = (await axios.delete(`http://localhost:4001/cart/cart`,{data : {
        id : userid.id,
        product : deletedata
      }})).data;
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="cartContainer">
        <div className="shopingCart Pro_width">
          {cartdata.map( (value,index) => {  
            return (
              <div className="product" key={index}>
                <img src={`http://localhost:4001${value.product.image}`} alt="product" />
                <div className="detail">
                  <div className="name">
                <Link to={`/product/${value.product._id}`}>
                    <h3>{value.product.name}</h3>
                    </Link>
                    <button onClick={() =>{
                      deleteproduct();
                      setDeletedata(value.product._id)
                    }}>X</button>
                  </div>
                  <div className="qutPrice">
                    <p>Qty : {value.qty}</p>
                    <h3>{value.product.price}</h3>
                  </div>
                </div>
              </div>
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
