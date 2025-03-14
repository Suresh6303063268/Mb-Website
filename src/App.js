import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './MBPROJECT/Home/Home.jsx'; 
import About from './MBPROJECT/About/About.jsx'; 
import Contact from './MBPROJECT/Contact/Contact.jsx'; 
import MBSERVICE from './MBPROJECT/Mb_Services/MbService.jsx'; 





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
        <Route path="/mbservice" element={<MBSERVICE />} /> 
       
      </Routes>
    </Router>
  );
}

export default App;
