import React from 'react';

function Header() {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul className='navbar-items'>
          <li><a href="#portfolio">Eddy's Portfolio</a></li>
          <div className='navbar-pages'>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#work-experience">Work Experience</a></li>
            <li><a href="#about">About</a></li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
  