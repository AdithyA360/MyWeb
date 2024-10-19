import React from 'react';
import './Footer.css'; // Assuming you'll add custom CSS

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Adithyakumar U</p>
    </footer>
  );
}

export default Footer;
