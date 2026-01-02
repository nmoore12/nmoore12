import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./components/portfolio/ProjectDetail";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./layout/Navbar";

export default function App() {
  return (
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </ThemeProvider>
  );
}
