/*getting_start.js*/
import React from 'react';
import './App.css';

import logo from './assets/logo.png';
import heroImage from './assets/image3a.jpg';
import step1 from './assets/image4.jpg';
import step2 from './assets/image5.png';
import step3 from './assets/image6.png';

function App_getting_start() {
  return (
    <div className="App_getting_start">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="DermaCare Logo" className="logo-img" />
          <h2 className="logo-text">
            DermaCare<br />
            <span>Analyze & Consulting</span>
          </h2>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#getting-started">Getting Started</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Skin health</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <a href="#" className="btn-yellow">Try DermaCare</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="subtittle">
              DermaCare is an AI-powered mobile application designed to assist in the early recognition of common skin diseases through image analysis.
              By leveraging advanced deep learning algorithms, DermaCare provides users with preliminary assessments based on clinically relevant features.
            </h2>
            <h3 className="tittle">GET STARTED ON YOUR SKIN WELLNESS JOURNEY!</h3>
            <a href="#getting-started" className="btn-yellow">Getting Started</a>
          </div>
          <img src={heroImage} alt="AI Face Analysis" className="hero-image" />
        </div>
      </section>

      {/* Steps Section */}
      <section id="getting-started" className="about-section">
        <h2 className="section-title">Skin Self-Exam with AI in 3 Steps</h2>
        <div className="steps">
          <div className="step">
            <img src={step1} alt="Step 1" />
            <p>Find a bright room and take a clear photo of the skin problem.</p>
          </div>
          <div className="step">
            <img src={step2} alt="Step 2" />
            <p>Our AI applies advanced image processing technology to analyze your photo.</p>
          </div>
          <div className="step">
            <img src={step3} alt="Step 3" />
            <p>Receive detailed analysis and recommendations within seconds.</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why Us?</h2>
        <p>DermaCare helps you track your skin health, detect early signs, and analyze your needs over time.</p>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Let's Stay In Touch!</h2>
        <p>Connect to ambitious updates from the world of digital health</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Get Updates</button>
        </form>
      </section>
    </div>
  );
}

export default App_getting_start;