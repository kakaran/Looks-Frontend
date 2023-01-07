import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import AdminMenu from "../../../Components/Adminmenu/AdminMenu";
import { ToastContainer, toast } from 'react-toastify';
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [render, setRender] = useState(0);


  useEffect(() => {
    const GetAllProducts = async () => {
      try {
        const data = (
          await axios.get("http://localhost:4001/product/products", {})
        ).data;
        setAllProduct(data);
        setRender(0)
      } catch (error) {
        console.log(error);
      }
    };
    GetAllProducts();
  }, [render]);


  const DeleteProduct = async (value) =>{
    try {
        const data = (await axios.delete(`http://localhost:4001/product/products/${value}`,)).data
        toast.success('Product Successfully Delete ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setRender(1)
    } catch (error) {
      console.log(error);
    }
  }

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
              The product list feature in admin pannel display the all products
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
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {allProduct.map((value, index) => {
                    return (
                      <tr key={index}>
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
                        <td onClick={() =>{
                          DeleteProduct(value._id)
                        }}><MdDeleteForever/></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default ProductDisplay;
