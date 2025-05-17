/*upload_photo.js*/
import React, { useRef, useState } from 'react';
import './App.css';
import bgImage from './Assets/image10.jpg';
import logo from './Assets/logo.png';

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraSectionRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
    alert('File selected: ' + e.target.files[0].name);
  };

  const startCamera = () => {
    cameraSectionRef.current.style.display = 'block';
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error('Webcam access error:', err);
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    alert('Image captured!');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="logo-text">
            DermaCare<br /><span>Analyze & Consulting</span>
          </div>
        </div>
        <div className="menu">
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
        </div>
      </div>

      {/* Upload Section */}
      <section className="upload-section">
        <div className="upload-container">
          <h2>Submit Your Photo</h2>
          <p>Select a photo or take one using your camera.</p>

          <div className="button-group">
            {/* Choose File Button */}
            <input
              type="file"
              id="photo-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="photo-upload" className="upload-btn">Choose File</label>

            {/* Take Photo Button */}
            <button className="upload-btn" onClick={startCamera}>Take Photo</button>
          </div>

          {/* Camera Section */}
          <div className="camera-section" ref={cameraSectionRef}>
            <video ref={videoRef} autoPlay playsInline id="video"></video>
            <button id="capture-btn" onClick={captureImage}>📸 Capture</button>
            <canvas ref={canvasRef} id="canvas"></canvas>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
