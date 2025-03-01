import icons from "../../../utils/icons.js";
import { FaArrowDownLong } from "react-icons/fa6";
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../../images/MYPIC.png';
const Hero = () => {
  return (
    <section className='hero' id="about">
      <div className="righ-side">
        <h1>Hello,my name is <span>ISAME BOUMANJEL</span></h1>
        <div className="type-animation">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Im a Front End developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Im a Web Designer',
        1000,
        'Im a Web developer',
        1000,
        'Im a UI UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
        />
        </div>
        <div className="buttons">
          <button className="contact">
            <a href="#contact">
              Contact Me
            </a>
          </button>
          <button className="contact">
          <a
              className="cv"
              href="/cv.pdf" // Path to the PDF file in the public folder
              download="ISAME_BOUMANJEL_CV.pdf" // Optional: Specify the downloaded file name
              >
              <span>Download CV</span>
              <FaArrowDownLong />
            </a>
          </button>
        </div>
        <div className="social-media">
          {/* <a href="https://www.facebook.com/issam.boumanjel"><icons.FaFacebook /></a>
          <a href="https://www.instagram.com/issamboumanjel/"><icons.FaInstagramSquare /></a>
          <a href="https://github.com/issamboumanjel"><icons.FaGithub /></a>
          <a href="https://www.linkedin.com/in/isame-boumanjel-b2903a155/"><icons.FaLinkedin /></a> */}
          <a
          href="https://www.facebook.com/issam.boumanjel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Facebook profile"
        >
          <icons.FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/issamboumanje"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram profile"
        >
          <icons.FaInstagramSquare />
        </a>
        <a
          href="https://github.com/issamboumanjel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <icons.FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/isame-boumanjel-b2903a155"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <icons.FaLinkedin />
        </a>
        </div>
      </div>
      <div className="left-side">
        <div className="image" loading="lazy">
          <img src={heroImg} alt="isame boumanjel" />
        </div>
      </div>
    </section>
  )
}

export default Hero
