import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;