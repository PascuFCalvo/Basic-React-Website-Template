import React from "react";
import "./App.css";
import ServicesView from "./views/ServicesView/ServicesView";
import MainView from "./views/MainView/MainView";
import Gallery from "./views/Gallery/Gallery";
import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>


      <Routes>
        <Route path="/" element={<MainView/>} />
        <Route path="/inicio" element={<>main</>} />
        <Route path="/servicios" element={<ServicesView />} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />


      </Routes>
    </>
  );
};

export default App;