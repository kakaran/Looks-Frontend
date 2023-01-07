import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import AdminMenu from "../../../Components/Adminmenu/AdminMenu";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const GetAllProducts = async () => {
      try {
        const data = (
          await axios.get("http://localhost:4001/product/products", {})
        ).data;
        setAllProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    GetAllProducts();
  }, []);

  return (
    <>
      <div className="productdisplayContainer">
        <AdminMenu />
        <div className="ProductDisplayandInfo">
          <div className="ProductDisInfo">
            <h1>
              Products
              <HiDocumentAdd style={{ color: "#d5d8dd", width: "22px" }} />
            </h1>
            <p>
              All the products that are available right now on the website.
            </p>
          </div>
          <hr />
          <div className="ProductDisplaytableContanier">
            <div className="ProductsDisplay">
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Product Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Short Info</th>
                    {/* <th>Description</th> */}
                  </tr>
                </thead>
                <tbody>
                  {allProduct.map((value, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{value._id}</td>
                        <td>
                          <img
                            src={`http://localhost:4001${value.image}`}
                            alt="Proimage"
                          />
                        </td>
                        <td>{value.name}</td>
                        <td>₹{value.price}</td>
                        <td>{value.category}</td>
                        <td>{value.miniInfo}</td>
                        {/* <td>{value.fullInfo}</td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
