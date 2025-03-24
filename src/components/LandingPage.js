import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage.css"; // Add styles separately
import logo from "../notes-logo.jpg"; // Your logo path
import illustration from "../notes-illustration.jpg"

export default function LandingPage() {
    return (
        <div className="landing-container">
            {/* Header Section */}
            <header className="landing-header">
                <img src={logo} alt="Notes Taking Logo" className="logo" />
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><Link to="/app" className="login-btn">Sign In</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>What Makes Us Unique?</h1>
                    <p>Organize your notes efficiently and collaborate seamlessly.</p>
                    <Link to="/app" className="cta-btn">Start Taking Notes</Link>
                </div>
                <div className="hero-image">
                    <img src={illustration} alt="Illustration" />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <h2>It’s as simple as it looks</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Use It Anywhere</h3>
                        <p>Access your notes from any device, anytime.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Stay Organized</h3>
                        <p>Keep all your notes neatly structured.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Work Together</h3>
                        <p>Collaborate with your team in real-time.</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="cta">
                <h2>We help you take better notes!</h2>
                <p>Join thousands of users who improve their productivity with Notes Taking.</p>
                <Link to="/app" className="cta-btn">Get Started</Link>
            </section>
        </div>
    );
}
