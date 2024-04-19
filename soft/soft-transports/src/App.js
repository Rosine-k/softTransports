import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/index";
import Erreur from "./pages/Erreur/index";
import Conditions from "./pages/Conditions/index";
import Mentions from "./pages/Mentions/index";
import ScrollToTop from "./components/ScrollToTop/index";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>  
       
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/conditions-et-politique" element={<Conditions />} />
        <Route path="/mentions-legales" element={<Mentions />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;