import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/home/home";
import SobreMim from "../page/sobremim.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LandingPage" element={<Home />} />
        <Route path="/SobreMim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
