import React, { useState } from 'react';
import './App.css';
import logo from './Assets/logo.png'; // ✅ Import the logo

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // TODO: Send to backend (Node.js)
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="DermaCare Logo" className="logo-img" /> {/* ✅ Fixed */}
          <h2 className="logo-text">DermaCare<br /><span>Analyze & Consulting</span></h2>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Skin Health</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <a href="#" className="btn-yellow">Try DermaCare</a>
        </nav>
      </header>

      <section className="register-section">
        <form className="register-form" onSubmit={handleSubmit}>
          <button className="register-top-btn" disabled>REGISTER</button>
          <h2>Keep up-to-date with your skin health journey.</h2>
          <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
          <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
          <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <label className="terms">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
            I accept the Terms of Use and Privacy Policy
          </label>
          <button type="submit" className="register-submit">Register</button>
        </form>
      </section>
    </div>
  );
}

export default App;
