import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Pages/Products/Product';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword.jsx';
import Home from "./Pages/Home/Home.jsx";
import Login from './Pages/Login/Login.jsx';
import ServicePage from './Pages/Services/Service_Page/ServicePage.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import SingleProduct from './Pages/Products/Single Product/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Booked from './Pages/Booking/Booked';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import ServiceBooked from './Pages/Booking/ServiceBooked/ServiceBooked';
import ErrorPage from './Pages/404 Page/ErrorPage';
import axios from 'axios';
import Admin from './Pages/Admin/Admin';
import ProductAdd from './Pages/Products/ProductAdd/ProductAdd';
import ProductDisplay from './Pages/Products/Product Display/ProductDisplay';
import ServiceAdd from './Pages/Services/Services Add/ServiceAdd';
import ServiceDisplay from './Pages/Services/Service Display/ServiceDisplay';
import OrderPage from './Pages/Order Page/OrderPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [check, setCheck] = useState("");
  let userid = useRef(localStorage.getItem("userid"))


  useEffect(() => {
    const checkuser = async () => {
      try {
        const data = (await axios.post("https://looks-0hws.onrender.com/api/checkuser", {
          data: {
            _id: userid.current
          }
        })).data
        setCheck(data)
      } catch (error) {
        console.log(error);
      }
    }
    checkuser()
  }, [])


  if (check === "admin") {
    console.log("admin")
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/services' element={<ServicePage />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/product/:id' element={<SingleProduct />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/Booking' element={<Booked />} />
            <Route exact path='/service_Booked/:id' element={<ServiceBooked />} />
            <Route exact path="/resetpassword/:useremail" element={<ForgetPassword />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/admin/ProductAdd' element={<ProductAdd />} />
            <Route exact path='/admin/Products' element={<ProductDisplay />} />
            <Route exact path='/admin/ServicesAdd' element={<ServiceAdd />} />
            <Route exact path='/admin/Services' element={<ServiceDisplay />} />
            <Route exact path='/admin/OrderPage/:id' element={<OrderPage />} />
          </Routes>
        </Router>
      </div>
    );
  } else if (check === "user") {
    console.log("user");
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/services' element={<ServicePage />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/product/:id' element={<SingleProduct />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/Booking' element={<Booked />} />
            <Route exact path='/service_Booked/:id' element={<ServiceBooked />} />
            <Route exact path="/resetpassword/:useremail" element={<ForgetPassword />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    console.log("public");
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/services' element={<ServicePage />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/product/:id' element={<SingleProduct />} />
            <Route exact path="/resetpassword/:useremail" element={<ForgetPassword />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
