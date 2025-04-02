import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotesApp from "./NotesApp";
import Signup from "./components/signup";
import './styles/styles.css'; // Import a global stylesheet

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Set a unique class on body based on the current route
    const pageClass = `page-${location.pathname.replace('/', '') || 'landing'}`;
    document.body.className = pageClass; // Reset and apply new class
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<NotesApp />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}