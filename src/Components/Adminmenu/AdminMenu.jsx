import React, { useState } from "react";
import { ImBoxAdd } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./AdminMenu.css";
const AdminMenu = () => {
  const [isProductActive, setIsProductActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <div className="AdminMenuContainer">
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
                <p onClick={() =>{
                  navigate("/admin/productAdd")
                }}>Product Add</p>
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
                <p>Services Add</p>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
