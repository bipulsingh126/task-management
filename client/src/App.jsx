import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/home";
import Footer from "./component/Footer";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

export default App;
