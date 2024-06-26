import React from 'react'
import intro from '../intro/intro.css'
import { Link } from 'react-router-dom'
export default function Intro() {
    return (
        <div className='introBack'>
            <header className="hero">
                <div className="hero-content">
                    <h1>Welcome to Our Website</h1>
                    <p className="subtitle">Explore, Learn, and Create</p>
                    <Link to="/datos">
                    <a href="#" className="action-button">Get Started</a>
                    </Link>
                </div>
            </header>

            <section className="about-section">
                <div className="container">
                    <h2>About Us</h2>
                    <h5>We are working on this project with the desire to improve, and we hope you enjoy this website</h5>
                    <h2></h2>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}