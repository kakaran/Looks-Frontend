import React from "react";
import AdminMenu from "../../Components/Adminmenu/AdminMenu";
import "./Admin.css";
const Admin = () => {
  return (
    <>
      <div className="adminContainer">
        <AdminMenu/>
        <h1>admin</h1>
      </div>
    </>
  );
};

export default Admin;
