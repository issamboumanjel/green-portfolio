import  { useState, useEffect } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#about'); // Default active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href); // Update the active link
    setIsMenuOpen(false); // Close the menu on mobile after clicking a link
  };

  // Change Navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const navbar = document.querySelector('nav');

      if (heroSection && navbar) {
        const heroRect = heroSection.getBoundingClientRect();

        if (heroRect.top <= 0 && heroRect.bottom >= 0) {
          // Hero section is in view
          document.documentElement.style.setProperty('--navbar-bg-color', '#23463c');
        } else {
          // Hero section is not in view
          document.documentElement.style.setProperty('--navbar-bg-color', 'var(--primary-color)');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="logo">ISAME BOUMANJEL</a>
        </div>
        <div className="menu" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul className={`links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#about"
              className={activeLink === '#about' ? 'active' : ''}
              onClick={() => handleLinkClick('#about')}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeLink === '#skills' ? 'active' : ''}
              onClick={() => handleLinkClick('#skills')}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === '#projects' ? 'active' : ''}
              onClick={() => handleLinkClick('#projects')}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === '#contact' ? 'active' : ''}
              onClick={() => handleLinkClick('#contact')}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;