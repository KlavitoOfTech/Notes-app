import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // ✅ Import Landing Page
import NotesApp from "./NotesApp"; // ✅ Rename your existing App component to NotesApp
import Signup from "./components/signup";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />  {/* ✅ Landing Page */}
            <Route path="/app" element={<NotesApp />} />  {/* ✅ Notes App */}
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}
