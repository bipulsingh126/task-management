import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/home";
import Footer from "./component/Footer";



function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <Footer/>
    </>
  );  
}

export default App;
