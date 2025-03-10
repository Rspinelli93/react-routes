import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Portfolio Desarrollador. Todos los derechos reservados.</p>
      <p>Email: desarrollador@ejemplo.com | Ginebra, Suiza</p>
      <div>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;