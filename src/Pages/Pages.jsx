import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Detailes from "./Detailes";
import NavBar from "../Components/Utility/NavBar";
import Footer from "../Components/Utility/Footer";

const Pages = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Detailes" element={<Detailes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Pages;
