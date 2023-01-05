import React, { useState } from "react";
import AdminMenu from "../../Components/Adminmenu/AdminMenu";
import { HiDocumentAdd } from "react-icons/hi";
import "./ProductAdd.css";
import axios from "axios";

const ProductAdd = () => {
  const [productform, setProductform] = useState({
    ProductName: "",
    MiniInfo: "",
    Description: "",
    Price: "",
    Category: "",
  });
  const [filedata, setFileData] = useState();

  const ProductAdd = async () => {
    try {
      let formData = new FormData();
      formData.append("image", filedata);
      formData.append("name", productform.ProductName);
      formData.append("miniInfo", productform.MiniInfo);
      formData.append("fullInfo", productform.Description);
      formData.append("price", productform.Price);
      formData.append("category", productform.Category);
      const data = (
        await axios.post("http://localhost:4001/product/products",
          formData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
      ).data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const Onchangedeldetail = (e) => {
    setProductform({ ...productform, [e.target.name]: e.target.value });
  };
  console.log(productform);
  console.log(filedata);
  return (
    <div className="productaddContainer">
      <AdminMenu />
      <div className="AddproductInfoAndProduction">
        <div className="AddProductInfo">
          <h1>
            Add Product
            <HiDocumentAdd style={{ color: "#d5d8dd", width: "22px" }} />{" "}
          </h1>
          <p>The add product feature in admin pannel</p>
        </div>
        <div className="AddProductController">
          <h3>Add Product</h3>
          <div className="AddProductform">
            <div className="GetProductInformation">
              <label htmlFor="ProductName">Product Name</label>
              <input
                type="text"
                name="ProductName"
                id="ProductName"
                onChange={Onchangedeldetail}
              />
              <label htmlFor="MiniInfo">Mini Info</label>
              <input
                type="text"
                name="MiniInfo"
                id="MiniInfo"
                onChange={Onchangedeldetail}
              />
              <label htmlFor="Description">Description</label>
              <textarea
                name="Description"
                id="Description"
                cols="30"
                rows="10"
                onChange={Onchangedeldetail}
              ></textarea>
              <label htmlFor="Price">Price</label>
              <input
                type="text"
                name="Price"
                id="Price"
                onChange={Onchangedeldetail}
              />
              <label htmlFor="Category">Category</label>
              <select
                name="Category"
                id="Category"
                onChange={Onchangedeldetail}
              >
                <option value="">Select Category</option>
                <option value="body">Body</option>
                <option value="eye">Eye</option>
                <option value="face">Face</option>
              </select>
            </div>
            <div className="AddProductImage">
              <input
                type="file"
                name="ImageUpload"
                id="ImageUpload"
                onChange={(e) => {
                  setFileData(e.target.files[0]);
                }}
              />
              <button onClick={ProductAdd}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
