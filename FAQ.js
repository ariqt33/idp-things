/*FAQ.js*/
import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  const [activeAnswer, setActiveAnswer] = useState(null);

  const showAnswer = (id) => {
    setActiveAnswer(id);
  };

  const goBack = () => {
    setActiveAnswer(null);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="DermaCare Logo" className="logo-img" />
          <div className="logo-text">
            DermaCare<br /><span>Analyze & Consulting</span>
          </div>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Skin Health</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#" className="active">FAQ</a></li>
          </ul>
          <a href="#" className="btn-yellow">Try DermaCare</a>
        </nav>
      </header>

      {!activeAnswer && (
        <section className="faq-section">
          <div className="faq-header">
            <span className="faq-icon">❓</span>
            <span className="faq-title">FAQ</span>
          </div>
          <h1 className="faq-heading">Have Questions?<br /><span>Get Answers</span></h1>

          <div className="faq-item" onClick={() => showAnswer('dermaCare')}>
            <p>What is DermaCare?</p>
          </div>

          <div className="faq-item" onClick={() => showAnswer('whoShouldUse')}>
            <p>Who should use DermaCare?</p>
          </div>
        </section>
      )}

      {activeAnswer === 'dermaCare' && (
        <section className="answer-section">
          <a href="#" onClick={goBack}>← Back</a>
          <h2>What is DermaCare?</h2>
          <p>
            DermaCare is a mobile application powered by AI, created to aid in the early detection of common skin diseases through image analysis.
            Utilizing advanced deep learning techniques, DermaCare offers users preliminary evaluations based on clinically significant features,
            providing a quick and convenient way to support skin health monitoring.
          </p>
          <p>
            Designed with a strong emphasis on accuracy, ease of use, and accessibility, DermaCare is a valuable resource for both individuals and
            healthcare professionals, especially in areas where access to dermatological care is limited.
          </p>
        </section>
      )}

      {activeAnswer === 'whoShouldUse' && (
        <section className="answer-section">
          <a href="#" onClick={goBack}>← Back</a>
          <h2>Who should use DermaCare?</h2>
          <p>
            DermaCare is suitable for a wide range of users, including individuals who want to monitor their skin health, those experiencing unfamiliar skin symptoms,
            and people living in areas with limited access to dermatologists.
          </p>
          <p>
            Additionally, healthcare professionals can use DermaCare as a supporting tool to quickly assess patient skin conditions and recommend follow-up care
            when needed.
          </p>
        </section>
      )}
    </div>
  );
}

export default App;
