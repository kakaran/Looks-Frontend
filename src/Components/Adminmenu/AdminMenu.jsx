import React, { useState } from "react";
import { ImBoxAdd } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AdminMenu.css";
const AdminMenu = () => {
  const [isProductActive, setIsProductActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="AdminMenuContainer">
        <div className="Categories" onClick={() =>{
                navigate("/admin")
              }}>
          <span className="categories_Header" >
            <span>
              <MdDashboard className="CatHeadIcons" />
              <h3>Dashboard</h3>
            </span>
          </span>
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsProductActive(!isProductActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>Product</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isProductActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    navigate("/admin/productAdd");
                  }}
                >
                  Product Add
                </p>
                <p
                  onClick={() => {
                    navigate("/admin/Products");
                  }}
                >
                  Products List
                </p>
              </span>
            </div>
          )}
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsServiceActive(!isServiceActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>Services</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isServiceActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    navigate("/admin/ServicesAdd");
                  }}
                >
                  Services Add
                </p>
                <p
                  onClick={() => {
                    navigate("/admin/Services");
                  }}
                >
                  Services List
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
