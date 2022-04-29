import React from "react";
import Header from  "./components/Header.js";
import Landing from "./components/Landing.js";
import About from "./components/About.js";
import Events_cal from  "./components/Events_Cal.js";
import Gallery from  "./components/Gallery.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="App">
    <Header />
    <Landing />
    <About title="About"/>
    <Events_cal title="Events" />
    <Gallery title="Gallery"/>
    <Contact title="Contact Us"/>
    <Footer />
    </div>
  );
}

export default App;
