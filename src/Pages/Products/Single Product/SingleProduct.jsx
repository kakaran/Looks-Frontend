import React,{ useState,useEffect } from "react";
import "./singleproduct.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import axios from "axios";
import {useParams } from "react-router-dom";
import {BsShieldFillCheck} from 'react-icons/bs'

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const {id} = useParams();


  useEffect(() => {
    const dataGet = async() =>{
      try {
        const data = (await axios.get(`http://localhost:4001/product/products/${id}`,{})).data
      setSingleProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    dataGet()
  }, [])
  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="SingleProContainer">
        <div className="Product_image Pro_width">
          <img src={`http://localhost:4001${singleProduct.image}`} alt="Product" />
          <div className="certified">
            <BsShieldFillCheck/>
            <h3>Certified Authentic</h3>
            <p>We guarantee this is an authentic Louis Vuitton item or 100% of your money back.</p>
          </div>
        </div>
        <div className="Product_info Pro_width">
          <h1>{singleProduct.name}</h1>
          <p>{singleProduct.miniInfo}</p>
          <hr />
          <p>{singleProduct.price}</p>
          <button className="button-37" role="button">Buy</button>
          <hr />
          <p style={{textJustify: "inter-word", textAlign : "justify"}}>{singleProduct.fullInfo}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
