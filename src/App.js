import React from 'react';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
