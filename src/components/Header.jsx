import React from 'react';
import cvIcon from '../assets/cv-icon.png';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';


function Header() {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul className='navbar-items'>
          <li><a href="/">Eddy's Portfolio</a></li>
          <div className='navbar-pages'>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/work-experience">Work Experience</a></li>
            <li><a href="/about">About</a></li>
          </div>
        </ul>
      </nav>

      <div className="vertical-icons">
        <a href="https://www.linkedin.com/in/eddypinarello" target="_blank" rel="noopener noreferrer">
          <img src={cvIcon} alt="Icon 1" />
        </a>
        <a href="https://www.linkedin.com/in/eddypinarello" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="Icon 2" />
        </a>
        <a href="https://github.com/EddyPinarello" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Icon 3" />
        </a>
      </div>
    </header>
  );
}

export default Header;
