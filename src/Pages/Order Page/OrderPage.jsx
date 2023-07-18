import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminMenu from "../../Components/Adminmenu/AdminMenu";
import "./OrderPage.css";

const OrderPage = () => {
  const [productCardData, setProductCardData] = useState({
    delivery : "",
    cart : []
  });
  const { id } = useParams();

  useEffect(() => {
    const productdataload = async () => {
      try {
        const data = (
          await axios.get(`https://looks-0hws.onrender.com/product/listProduct/${id}`)
        ).data;
        await setProductCardData({
            delivery : data.delivery,
            cart : data.cart
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    productdataload();
  }, []);

  return (
    <>
      <div className="orderContainer">
        <AdminMenu />
        <div className="OrderIdAndInfo">
          <div className="OrderId">
            <h2>Order Id : {id} </h2>
          </div>
          <hr />
          <div className="OrderInfoContainer">
            <div className="ProductDataDisplay">
                <h2>Products</h2>
            {productCardData.cart.map((value,index) =>{
                return(
                    <div className="ProductDataCard" key={index}>
                    <p>{index+1}</p>
                    <img src={`https://looks-0hws.onrender.com${value.product.image}`} alt="" />
                    <p>{value.product.name}</p>
                    <p>₹{value.product.price}</p>
                    <p>Qty: {value.qty}</p>
                  </div>
                )   
            })}
            </div>
            <div className="AddProductController">
            <h3>Delivery Address</h3>
            <div className="AddProductform">
              <div className="GetProductInformation">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={productCardData.delivery.name}
                  disabled
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={productCardData.delivery.email}
                  disabled
                />
                 <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={productCardData.delivery.phone}
                  disabled
                />
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="4"
                  value={productCardData.delivery.address}
                  disabled
                ></textarea>
               
               <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={productCardData.delivery.pincode}
                  disabled
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
