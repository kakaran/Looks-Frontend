import React, { useState } from "react";
import AdminMenu from "../../../Components/Adminmenu/AdminMenu";
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

  const [AddProductlist, setAddProductlist] = useState([]);

  const ProductAdd = async () => {
    try {
      let formData = new FormData();
      formData.append("image", filedata);
      formData.append("name", productform.ProductName);
      formData.append("miniInfo", productform.MiniInfo);
      formData.append("fullInfo", productform.Description);
      formData.append("price", productform.Price);
      formData.append("category", productform.Category);
      const data1 = (
        await axios.post("http://localhost:4001/product/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).data;
      setAddProductlist((old) => [...old, data1]);
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };
  const Onchangedeldetail = (e) => {
    setProductform({ ...productform, [e.target.name]: e.target.value });
  };
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
        <hr />
        <div className="AddproductController_Display">
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
          <div className="ShowAddProducts">
            <div className="AddProductsTable">
              <table>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Product Id</th>
                  <th>Price</th>
                </tr>
                {AddProductlist.map((value, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value._id}</td>
                      <td>₹{value.price}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
