import React from 'react';
import cvIcon from '../assets/cv-icon.png';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';

function Header() {
  const currentPath = window.location.pathname;

  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul className='navbar-items'>
            <li className={currentPath === '/' ? 'active' : ''}>
                <a href="/">Eddy's Portfolio</a>
                {currentPath === '/' && <div className="underline"></div>}
            </li>
            <div className='navbar-pages'>
                <li className={currentPath === '/projects' ? 'active' : ''}>
                <a href="/projects">Projects</a>
                {currentPath === '/projects' && <div className="underline"></div>}
                </li>
                <li className={currentPath === '/work-experience' ? 'active' : ''}>
                <a href="/work-experience">Work Experience</a>
                {currentPath === '/work-experience' && <div className="underline"></div>}
                </li>
                <li className={currentPath === '/about' ? 'active' : ''}>
                <a href="/about">About</a>
                {currentPath === '/about' && <div className="underline"></div>}
                </li>
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
