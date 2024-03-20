import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/index";
import Erreur from "./pages/Erreur/index";


function App() {
  return (
    <BrowserRouter> 
       
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Erreur />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;