import React, { useState } from 'react';
import './App.css'; // Your CSS file

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setMessage('Subscribed successfully!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-section">
          <img src="/logo.png" alt="DermaCare Logo" className="logo-img" />
          <h2 className="logo-text">
            DermaCare
            <br />
            <span>Analyze & Consulting</span>
          </h2>
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

      <main>
        {/* Hero sections */}
        <section className="hero-section">
          <div className="hero-text">
            <h2 className="tittle">
              Curious about skin health? <br />
              Discover the answers here.
            </h2>
          </div>
        </section>

        <section className="hero-section">
          <div className="hero-text">
            <h3 className="tittle1">Discover Your Skin Type</h3>
            <h4 className="tittle2">Curious about your skin type?</h4>
            <h6 className="subtittle">
              Your skin type plays a key role in determining your likelihood
              of developing certain skin conditions, including skin cancer.
              Our app helps you pinpoint your skin type so you can receive
              tailored guidance, protection strategies, and personalized care recommendations.
            </h6>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <h2 className="highlight-title">Spots and Moles: What You Need to Know</h2>

          <h3>Not all moles are the same.</h3>
          <p>
            While many of us overlook common moles or skin spots, their variations in shape, size, and color can reveal vital clues about your skin health.
            Identifying these differences can help catch early signs of skin issues, including cancer. Rather than guessing through online images,
            use our AI-powered tool for a more reliable and instant assessment.
          </p>

          <h3>But first, what exactly is a mole?</h3>
          <p>
            A mole (or nevus) is a cluster of melanocytes. A melanocyte is pigment-producing cells in the skin. These spots can appear due to sun exposure
            or be present from birth. People with lighter skin tones typically have more moles due to having less melanin.
          </p>
          <p>
            On average, adults have 10 to 40 moles. They may change or increase in number due to hormonal shifts like puberty or pregnancy.
            Most are harmless, but regular self-exams (monthly if you have a family history, or every three months otherwise) are crucial to track any changes.
          </p>

          <h3>Curious about your skin type?</h3>
          <p>
            Your skin type plays a key role in determining your likelihood of developing certain skin conditions, including skin cancer.
            Our app helps you pinpoint your skin type so you can receive tailored guidance, protection strategies, and personalized care recommendations.
          </p>
          <p>
            Using your DermaCare Skin Type and Risk Profile, if you're identified as Risk or High Risk, DermaCare will design a personalized
            skin health roadmap guiding you through every step, even beyond your doctor’s visit.
          </p>

          <h3>How does it work?</h3>
          <p>
            Simply open the app and <span className="muted">complete a quick questionnaire to determine your skin type and evaluate your risk profile.</span>
          </p>
        </section>

        {/* Types of Skin Moles */}
        <section className="types-section">
          <h2 className="highlight-subtitle">Types of Skin Moles</h2>

          <div className="mole-type">
            <strong>Common Moles</strong>
            <p>
              Small (usually under 6 mm), clearly edged, smooth, dome-shaped, and pigmented. Usually found on sun-exposed areas and rarely become cancerous.
            </p>
          </div>

          <div className="mole-type">
            <strong>Atypical Moles (Dysplastic Nevi)</strong>
            <p>
              These show irregular borders, inconsistent coloring, and can be flat or raised. While they may resemble precancerous lesions, most are benign.
              However, having many can increase skin cancer risk.
            </p>
          </div>

          <div className="mole-type">
            <strong>Congenital Moles (Congenital Nevi)</strong>
            <p>
              Present from birth or within the first year. These can vary in size and may carry a risk of melanoma later in life,
              especially during adolescence and adulthood.
            </p>
          </div>

          <div className="mole-type">
            <strong>Acquired Moles</strong>
            <p>
              Develop during childhood or adulthood, usually due to sun exposure. Generally harmless but should still be monitored for changes.
            </p>
          </div>

          <div className="mole-type">
            <strong>Junctional Melanocytic Nevi</strong>
            <p>
              Form where the outer and middle skin layers meet. Slightly raised with defined borders and darker tones.
              Common from childhood to young adulthood.
            </p>
          </div>

          <div className="mole-type">
            <strong>Intradermal Nevi</strong>
            <p>
              Blending with your natural skin tone, these are found deeper in the dermis and often appear later in life. Typically benign.
            </p>
          </div>

          <div className="mole-type">
            <strong>Compound Nevi</strong>
            <p>
              Contain cells in both the dermis and at the junction. Usually have a raised center and flat edges with even pigmentation.
            </p>
          </div>
        </section>

        {/* Types of Moles list */}
        <section className="types">
          <h2>Types of Moles</h2>
          <ul>
            <li><strong>Congenital Moles (Congenital Nevi):</strong> Present from birth or within the first year. Risk of melanoma later in life.</li>
            <li><strong>Acquired Moles:</strong> Develop during childhood or adulthood. Usually due to sun exposure. Generally harmless.</li>
            <li><strong>Junctional Melanocytic Nevi:</strong> Slightly raised with defined borders and darker tones. Common in youth.</li>
            <li><strong>Intradermal Nevi:</strong> Deeper in the dermis and often appear later in life. Typically benign.</li>
            <li><strong>Compound Nevi:</strong> Cells in both the dermis and at the junction. Raised center and flat edges with even pigmentation.</li>
            <li><strong>Halo Nevi:</strong> Surrounded by a pale ring caused by immune response. Usually benign.</li>
          </ul>
        </section>

        {/* Safe Mole Section */}
        <section className="safe-mole">
          <h2>How to Know If a Mole Is Safe</h2>
          <ul>
            <li>Clear borders</li>
            <li>Smooth or dome-like shape</li>
            <li>Diameter around 6 mm</li>
            <li>Stable in size, shape, and color over time</li>
          </ul>
        </section>

        {/* Warning Signs Section */}
        <section className="warning-signs">
          <h2>Signs That Could Indicate Skin Cancer</h2>
          <ul>
            <li>Increase in size</li>
            <li>Irregular shapes or jagged edges</li>
            <li>Uneven or darkened color</li>
            <li>Asymmetry</li>
            <li>Itching, bleeding, or crusting</li>
            <li>Inflammation or elevation</li>
            <li>Multiple shades of brown or black</li>
          </ul>
        </section>

        {/* ABCDE Rule */}
        <section className="abcde-rule">
          <h2>Use the ABCDE Rule</h2>
          <p><em>Dermatologists use this checklist for early melanoma detection:</em></p>
          <ul>
            <li><strong>A – Asymmetry:</strong> One half doesn’t match the other</li>
            <li><strong>B – Border:</strong> Irregular or ragged edges</li>
            <li><strong>C – Color:</strong> Multiple shades present</li>
            <li><strong>D – Diameter:</strong> Larger than 6 mm</li>
            <li><strong>E – Evolving:</strong> Changing in size, shape, or color</li>
          </ul>
          <img src="/image18.jpg" alt="ABCDE Rule" />
          
        </section>

        {/* Subscribe Section */}
        <section className="subscribe">
          <h2>Subscribe for Updates</h2>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Get Updated</button>
          </form>
          {message && <p className="subscription-message" role="alert">{message}</p>}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 DermaCare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
