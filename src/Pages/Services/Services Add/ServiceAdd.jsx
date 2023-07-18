import React,{ useState } from "react";
import AdminMenu from "../../../Components/Adminmenu/AdminMenu";
import { HiDocumentAdd } from "react-icons/hi";
import axios from "axios";
import "./ServiceAdd.css";

const ServiceAdd = () => {
  const [productform, setProductform] = useState({
    Information : "",
    cost : ""
  })
  const [filedata, setFiledata] = useState();
  const [addservicelist,setAddservicelist] = useState([]);

  const ServiceAdd = async () =>{
    try {
        let formData = new FormData();
        formData.append("image",filedata);
        formData.append("information",productform.Information);
        formData.append("cost",productform.cost);
        const data = (await axios.post("https://looks-0hws.onrender.com/service/services",formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })).data
        setAddservicelist((old) => [...old,data]);
        console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const Onchangededetail = (e) =>{
    setProductform({...productform, [e.target.name] : e.target.value});
  }

  return (
    <>
      <div className="serviceAddContainer">
        <AdminMenu />
        <div className="AddServiceandInfo">
          <div className="ServicesInfo">
            <h1>
              Add Service
              <HiDocumentAdd style={{ color: "#d5d8dd", width: "22px" }} />{" "}
            </h1>
            <p>Add the services, you want to display on the website.</p>
          </div>
          <hr />
          <div className="AddServiceController_display">
            <div className="addserviceController">
              <h3>Add Service</h3>
              <div className="AddServiceForm">
                <div className="getproductInformation">
                  <label htmlFor="Package">Package Detail</label>
                  <input type="text" name="Information" id="Package" onChange={Onchangededetail} />
                  <label htmlFor="Price">Price</label>
                  <input type="text" name="cost" id="Price" onChange={Onchangededetail}/>
                </div>
                <div className="AddserviceImage">
                  <input type="file" name="image" id="image" onChange={(e) =>{
                    setFiledata(e.target.files[0]);
                  }}/>
                </div>
              </div>
                  <button onClick={ServiceAdd}>Submit</button>
            </div>
            <div className="ShowAddService">
              <div className="Addservicetable">
                <table>
                  <tr>
                    <th>Index</th>
                    <th>Package Detail</th>
                    <th>Product Id</th>
                    <th>price</th>
                  </tr>
                  {addservicelist.map((value,index) =>{
                    return(
                      <tr>
                        <td>{index+1}</td>
                        <td>{value.information}</td>
                        <td>{value._id}</td>
                        <td>₹{value.cost}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAdd;
