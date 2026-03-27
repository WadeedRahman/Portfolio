import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
    <Route path="/" element={<Hero />} />
        <Route path="/AboutSection" element={<AboutSection />} />
         <Route path="/Services" element={<Services />} />
        </Routes>
        </Router>
  );
}

export default App;