import React from 'react';
import Footer from './Components/Footer/Footer';
import NavHome from './Components/Nav_Home/NavHome';
import Experience from './Pages/Experience/Experience';
import Services from './Pages/Services/Services';
import Stories from './Pages/Stories/Stories';

function App() {
  return (
    <div className="App">
      <NavHome/>
      <Services/>
      <Stories/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
