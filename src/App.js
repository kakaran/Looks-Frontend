import React from 'react';
import Footer from './Components/Footer/Footer';
import NavHome from './Components/Nav_Home/NavHome';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <NavHome/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
