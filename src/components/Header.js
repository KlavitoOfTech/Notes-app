import React from "react";
import logo from "../notes-logo.jpg"; // Adjust path if needed

export default function Header() {
    return (
        <header className="app-header">
            <img src={logo} alt="App Logo" className="logo" />
        </header>
    );
}