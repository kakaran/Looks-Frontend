import React from 'react'
import "./product.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Product = () => {
  return (
    <>
    <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="produc_Container">
      <h1>Products</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Product