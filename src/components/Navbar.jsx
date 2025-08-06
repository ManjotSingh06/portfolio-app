import React from 'react';

const Navbar = () => (
  <nav style={{ backgroundColor: '#000', padding: '1rem', color: 'white' }}>
    <h1 style={{ display: 'inline' }}>Manjot Singh</h1>
    <ul style={{ listStyle: 'none', display: 'inline', float: 'right' }}>
      <li style={{ display: 'inline', margin: '0 1rem' }}><a href="#about" style={{ color: 'white' }}>About</a></li>
      <li style={{ display: 'inline', margin: '0 1rem' }}><a href="#skills" style={{ color: 'white' }}>Skills</a></li>
      <li style={{ display: 'inline', margin: '0 1rem' }}><a href="#projects" style={{ color: 'white' }}>Projects</a></li>
      <li style={{ display: 'inline', margin: '0 1rem' }}><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;