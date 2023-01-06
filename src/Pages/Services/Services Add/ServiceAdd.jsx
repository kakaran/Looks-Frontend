import React from 'react'
import AdminMenu from '../../../Components/Adminmenu/AdminMenu'
import { HiDocumentAdd } from "react-icons/hi";
import "./ServiceAdd.css"

const ServiceAdd = () => {
  return (
    <>
      <div className="serviceAddContainer">
        <AdminMenu/>
        <div className="AddServiceandInfo">
          <div className="ServicesInfo">
          <h1>
            Add Service
            <HiDocumentAdd style={{ color: "#d5d8dd", width: "22px" }} />{" "}
          </h1>
          <p>The add Service feature in admin pannel</p>
          </div>
        <hr />
        </div>
      </div>
    </>
  )
}

export default ServiceAdd