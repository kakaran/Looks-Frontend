import React from "react";
import axios from "axios";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "./Service_Page.css";
import { useEffect, useState } from "react";

const Service_Page = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const loadpackages = async () => {
        await axios.get("http://localhost:4001/product/products",{}).then((response) =>{
            console.log(response.data);
            setProduct(response.data)
        }).catch((err) =>{
            console.log(err);
        })
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
          {product.map((prod,index) => {
              console.log(prod.cost)
              return (
              <div className="Package_Card">
                <img src={`http://localhost:4001${prod.image}`} alt="" />
                <p>{prod.productname}</p>
                <p>{prod.information}</p>
                <p>{prod.cost}</p>
                <button>Buy Now</button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service_Page;
