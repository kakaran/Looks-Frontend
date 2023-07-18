import React, { useState, useEffect } from "react";
import AdminMenu from "../../Components/Adminmenu/AdminMenu";
import { MdDateRange ,MdAdminPanelSettings} from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { FaBoxes,FaBox } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
const Admin = () => {
  const [time, setTime] = useState(new Date());
  const [acountinfo, setaccountinfo] = useState({
    usercount : "",
    admincount : ""
  });
  const [todayorders,setTodayorders] = useState({
    count :"",
    latestorders : ""
  });
  const [totalOrders,setTotalorders] = useState([])
  const [totalearning,setTotalearning] = useState(0);
  const navigator = useNavigate("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const logoutaccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    navigator("/");
  };

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };

    const totalusersload = async () => {
      try {
        const data = (
          await axios.get("https://looks-0hws.onrender.com/api/totalusers")
        ).data;
        await setaccountinfo({
          usercount : data.user.usercount,
          admincount : data.admin.admincount
        });
      } catch (error) {
        console.log(error);
      }
    };

    const todayOrders = async () =>{
      try {
        const data = (await axios.get("https://looks-0hws.onrender.com/orders/todayorder",{})).data
        setTodayorders(data)
      } catch (error) {
        console.log(error);
      }
    }

    const totalOrders = async () =>{
      try {
        let sum = 0;
        const data = (await axios.get("https://looks-0hws.onrender.com/orders/orders",{})).data
        setTotalorders(data)
        
        data.forEach((value) =>{
        
          sum = sum + Number(value.totalprice);
        })
        setTotalearning(sum)
      } catch (error) {
        console.log(error);
      }
    }

    totalusersload();
    todayOrders();
    totalOrders();
  }, []);

  
  return (
    <>
      <div className="adminContainer">
        <AdminMenu />
        <div className="AdmindashboardContainer">
          <div className="Dashboardtopbar">
            <p className="clock">
              <MdDateRange />
              {new Date().toLocaleDateString("en-EN")}
            </p>
            <p className="clock">
              <GiSandsOfTime />
              {time.toLocaleTimeString("en-EN")}
            </p>
            <button onClick={logoutaccount}>Logout</button>
          </div>
          <div className="DashbordCardContainer">
            <div className="dashboardCard">
              <ImUsers className="icon" />
              <h3>Total Customer</h3>
              <h2>{acountinfo.usercount}</h2>
            </div>
            <div className="dashboardCard">
              <MdAdminPanelSettings className="icon" />
              <h3>Total Admin</h3>
              <h2>{acountinfo.admincount}</h2>
            </div>
            <div className="dashboardCard">
              <FaBoxes className="icon" />
              <h3>Total Orders</h3>
              <h2>{totalOrders.length}</h2>
            </div>
            <div className="dashboardCard">
              <FaBox className="icon" />
              <h3>Today Orders</h3>
              <h2>{todayorders.count}</h2>
            </div>
            <div className="dashboardCard">
              <BiRupee className="icon" />
              <h3>Total Revenue</h3>
              <h2>₹{totalearning}</h2>
            </div>
          </div>
            <h1>Orders</h1>
          <div className="OrderDisplayContainer">
            <div className="OrderDisplay">
              <table>
                <thead>
                  <tr>
                  <th>Index</th>
                  <th>Order Id</th>
                  <th>User Id</th>
                  <th>Total Price</th>
                  <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {totalOrders.map((value,index)=>{
                    return(
                      <tr key={index} onClick={() =>{
                        navigator(`/admin/OrderPage/${value._id}`)
                      }}>
                        <td>{totalOrders.length-index}</td>
                        <td>{value._id}</td>
                        <td>{value.userId}</td>
                        <td>₹{value.totalprice}</td>
                        <td>{value.createdAt.slice(0,10)}</td>
                      </tr>
                    )
                  }).reverse()}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Admin;
