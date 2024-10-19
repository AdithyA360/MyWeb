import React from 'react';
import './Header.css'; // New CSS for header

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://drive.google.com/file/d/1NxsbGcDiWxDi2ADoOQCoHX_LqQTnwGyh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">CV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
