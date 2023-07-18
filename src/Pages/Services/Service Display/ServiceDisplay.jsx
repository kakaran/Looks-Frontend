import React, { useState, useEffect } from "react";
import AdminMenu from "../../../Components/Adminmenu/AdminMenu";
import { HiDocumentAdd } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./ServiceDispaly.css";

const ServiceDisplay = () => {
  const [allServices, setAllServices] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const GetAllServices = async () => {
      try {
        const data = (
          await axios.get("https://looks-0hws.onrender.com/service/services", {})
        ).data;
        setAllServices(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    GetAllServices();
  }, [render]);

  const DeleteProduct = async (value) => {
    try {
      const data = (
        await axios.delete(`https://looks-0hws.onrender.com/service/services/${value}`)
      ).data;
      toast.success("Service Successfully Delete ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="ServiceDisplayContainer">
        <AdminMenu />
        <div className="ServiceDisplayInfo">
          <div className="ServiceDisInfo">
            <h1>
              Services
              <HiDocumentAdd style={{ color: "#d5d8dd", width: "22px" }} />
            </h1>
            <p>
              The product list feature in admin pannel display the all services
            </p>
          </div>
          <hr />
          <div className="ServiceDisplaytableContanier">
            <div className="ServiceDisplay">
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Product Id</th>
                    <th>Image</th>
                    <th>Information</th>
                    <th>Price</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {allServices.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value._id}</td>
                        <td>
                          <img
                            src={`https://looks-0hws.onrender.com${value.image}`}
                            alt="Serimage"
                          />
                        </td>
                        <td>{value.information}</td>
                        <td>₹{value.cost}</td>
                        <td
                          onClick={() => {
                            DeleteProduct(value._id);
                          }}
                        >
                          <MdDeleteForever />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ServiceDisplay;
