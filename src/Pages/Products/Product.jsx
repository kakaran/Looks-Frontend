import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Product = () => {

  const [product, setProduct] = useState([]);
  const [selproduct,setSelproduct] = useState([]);
  const [statemanage,setStatemanage] = useState(product);
  let categories = ["eye", "face", "body"];
  let selectedProducts = [];

  //-----API Calling-----//
  useEffect(() => {
    const productload = async () => {
    //   await axios.get("http://localhost:4001/product/products",{}).then((response) => {
    //       setProduct(response.data);
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    // };
    try {
      let data =  (await axios.get("http://localhost:4001/product/products",{})).data;
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    productload();
    console.log(product);
  };
  }, []);

  //----------Data Select of Category -----//
  const selectivedata = (cate) => {
    selectedProducts.splice(0,selectedProducts.length);
    product.forEach((value) => {
      if(value.category == cate) {
        selectedProducts.push(value);
         setSelproduct(selectedProducts);
        }
      }); 
      // console.log(selectedProducts);
      // console.log(selproduct);
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
              setStatemanage(product)
            }}>All Products</li>
            <li
              onClick={() => {
                setStatemanage(selproduct)
                selectivedata(categories[0]);
              }}
            >
              Eye
            </li>
            <li
              onClick={() => {
                setStatemanage(selproduct)
                selectivedata(categories[1]);
              }}
            >
              Face
            </li>
            <li
              onClick={() => {
                setStatemanage(selproduct)
                selectivedata(categories[2]);
              }}
            >
              Body
            </li>
          </ul>
        </div>
        <div className="products_Card_Container">
        {statemanage.map((value,key) =>{
          return(
            <div className="Card">
            <div className="Card_Image">
              <img src={`http://localhost:4001${value.image}`}alt="product" />
            </div>
            <p>{value.name}</p>
            <p>{value.miniInfo}</p>
          </div>
          )
        })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
