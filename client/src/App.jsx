import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
