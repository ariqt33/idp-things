import React, { useState } from 'react';
import './App.css'; // Make sure your CSS is set up

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, acceptedTerms } = formData;

    if (!acceptedTerms) {
      setMessage('You must accept the terms.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const result = await response.json();
      setMessage(result.message);

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptedTerms: false,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="register-section">
      <form className="register-form" onSubmit={handleSubmit}>
        <button className="register-top-btn" type="button">REGISTER</button>
        <h2>Keep up-to-date with your skin health journey.</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="terms">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
          />
          I accept the Terms of Use and Privacy Policy
        </label>

        <button type="submit" className="register-submit">Register</button>

        {message && <p style={{ marginTop: '10px', color: '#d00' }}>{message}</p>}
      </form>
    </div>
  );
}

export default App;