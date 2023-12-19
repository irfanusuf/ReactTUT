import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Home from "./Components/Home/Home";
import Leftnav from "./Components/LeftNav/Leftnav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';       // importing  use state libraray
import './App.css';

function App() {


  const [lightMode, setDarkMode] = useState(true);
  function handleDarkMode() {
    setDarkMode(!lightMode)
    console.log('theme changed ')

  }
  return (


    <div>

      <BrowserRouter>

        <Navbar
          function={handleDarkMode}
          buttonName={lightMode ? "DarkMode" : "LightMode"}
          navName={lightMode ? "nav-light" : "nav-dark"}
        />


        <div className="central-main">
          <div className={lightMode ? 'central-section-light' : 'central-section-dark'}>

            <Leftnav
              divName={lightMode ? 'leftnav-light' : 'leftnav-dark'}
            />


            <Routes>
              <Route path="/" element={<Home
                user="irfan usuf"
              />} />



              <Route path="/Blog" element={<Blog />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact
              MainTitle = "Contact"
              
              />} />
            </Routes>



          </div>
        </div>

        <Footer
          divName={lightMode ? "Footer-light" : "Footer-dark"}
        />


      </BrowserRouter>

    </div>

  );
}

export default App;
