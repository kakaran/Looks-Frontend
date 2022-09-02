import React from 'react';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
