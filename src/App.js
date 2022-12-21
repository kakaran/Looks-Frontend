import React from 'react';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Product from './Pages/Products/Product';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword.jsx';
import Home from "./Pages/Home/Home.jsx";
import Login from './Pages/Login/Login.jsx';
import Service_Page from './Pages/Services/Service_Page/Service_Page.jsx';
import Signup from './Pages/Signup/Signup.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/services' element={<Service_Page/>}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path="/resetpassword/:useremail" element={<ForgetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
