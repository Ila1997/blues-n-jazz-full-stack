import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-name">Ilaria Nuzzaco</h2>
      </div>
      <div className="footer-right">
        <a href="https://ilaria-nuzzaco-personal-website.netlify.app/" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="footer-icon" />
        </a>
        <a href="https://github.com/Ila1997" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ilaria-nuzzaco-front-end-developer/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/ilaria.nuzzaco/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
