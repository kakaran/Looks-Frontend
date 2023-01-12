import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";


const Product = () => {

  const [productdata, setProductdata] = useState([]);
  const [selproduct,setSelproduct] = useState([productdata]);
  let categories = ["eye", "face", "body",""];
  let selectedProducts = [];

  //-----API Calling-----//
  useEffect(() =>{
    const productload = async () =>{
      try {
        const data = (await axios.get("http://localhost:4001/product/products")).data
        setProductdata(data);
        setSelproduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    productload();
    window.scrollTo(0, 0)
  },[])
  

  //----------Data Select of Category -----//
  const selectivedata = (cate) => {
    selectedProducts.splice(0,selectedProducts.length);
    productdata.forEach(async (value) => {
      if(value.category == cate) {
         await selectedProducts.push(value);
         await setSelproduct(selectedProducts);
        }else{
          await setSelproduct(productdata)
        }
      }); 
  };
  
  return (
    <>
      <div style={{ backgroundColor: "#e9cebc", padding: "0px 25px" }}>
        <Navbar />
      </div>
      <div className="product_Container">
        <h1>Products</h1>
        <div className="bar">
          <ul>
            <li
            onClick={() =>{
              selectivedata(categories[3]);
            }}>All Products</li>
            <li
              onClick={() => {
                selectivedata(categories[0]);
              }}
            >
              Eye
            </li>
            <li
              onClick={() => {
                selectivedata(categories[1]);
              }}
            >
              Face
            </li>
            <li
              onClick={() => {
                selectivedata(categories[2]);
              }}
            >
              Body
            </li>
          </ul>
        </div>
        <div className="products_Card_Container">
        {selproduct.map((value,key) =>{
          return(
            <Link to={`/product/${value._id}`}>
            <div className="Card" key={key}>
            <div className="Card_Image">
              <img src={`http://localhost:4001${value.image}`}alt="product" />
            </div>
            <p className="proName">{value.name}</p>
            <p>{value.miniInfo}</p>
          </div>
            </Link>
          )
        })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
