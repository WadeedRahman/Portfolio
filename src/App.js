import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/AboutSection" element={<AboutSection />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;