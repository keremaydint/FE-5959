import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.scss";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
