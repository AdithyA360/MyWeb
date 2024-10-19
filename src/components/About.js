import React, { useState, useEffect } from 'react';
import './About.css'; // Custom styles for the About section
import Photo1 from '../Photo1.jpeg'; // Update path
import Photo2 from '../Photo2.jpeg'; // Update path
import Photo3 from '../Photo3.jpeg'; // Update path

function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [Photo1, Photo2, Photo3]; // Use imported images

  // Cycle through the photos every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [photos.length]);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>Adithyakumar U</h1>
          <p>📍 Chennai, Tamilnadu</p>
          <p>📞 <a href="tel:+919345524743">+91 9345524743</a></p>
          <p>📧 <a href="mailto:adithyakumar.u@gmail.com">adithyakumar.u@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/adithyakumar-u/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          <p>📄 <a href="https://drive.google.com/file/d/1NxsbGcDiWxDi2ADoOQCoHX_LqQTnwGyh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download CV</a></p>
        </div>
        <div className="about-photo">
          <img src={photos[currentPhoto]} alt="Adithyakumar" />
        </div>
      </div>
    </section>
  );
}

export default About;
