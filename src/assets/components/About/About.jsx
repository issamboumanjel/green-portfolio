
import { useCallback } from 'react';
import './About.css';

const About = () => {
  // Smooth scroll handler for "Learn More"
  const handleLearnMoreClick = useCallback((e) => {
    e.preventDefault();
    const moreSection = document.querySelector('#more');
    if (moreSection) {
      moreSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="container1" id="about">
      <div className="about">
        <h2>About Me</h2>
        <p>
          <span>Hello! I am Isame Boumanjel, a Web Developer and Software Engineer.</span> <br />
          I am passionate about technology and always looking for new ways to learn and grow. 
          I enjoy collaborating with others to solve problems and am confident in my skills to succeed in this field. 
          <a href="#more" className="learn-more" onClick={handleLearnMoreClick} aria-label="Learn more about me">
            Learn More
          </a>
        </p>
      </div>
      <div className="basic-info">
        <h2>Basic Information</h2>
        <ul>
          <li><span>Age:</span>25</li>
          <li><span>Email:</span><a href="mailto:isameboumanjel@gmail.com">isameboumanjel@gmail.com</a></li>
          <li><span>Phone:</span><a href="tel:+212640298482">+212640298482</a></li>
          <li><span>Address:</span>Agadir, Lkliaa Ait Melloul</li>
          <li><span>Languages:</span>Arabic | French | English</li>
        </ul>
      </div>
    </div>
  );
};

export default About;