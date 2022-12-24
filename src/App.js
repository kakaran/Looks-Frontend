import React from 'react';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Product from './Pages/Products/Product';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword.jsx';
import Home from "./Pages/Home/Home.jsx";
import Login from './Pages/Login/Login.jsx';
import ServicePage from './Pages/Services/Service_Page/ServicePage.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import SingleProduct from './Pages/Products/Single Product/SingleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/services' element={<ServicePage/>}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path='/product/:id' element={<SingleProduct/>}/>
          <Route exact path="/resetpassword/:useremail" element={<ForgetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
