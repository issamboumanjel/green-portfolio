import icons from "../../../utils/icons.js";
import { FaArrowDownLong } from "react-icons/fa6";
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
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
          <a href=""><icons.FaFacebook /></a>
          <a href=""><icons.FaInstagramSquare /></a>
          <a href=""><icons.FaGithub /></a>
          <a href=""><icons.FaLinkedin /></a>
        </div>
      </div>
      <div className="left-side">
        <div className="image">
          <img src="src/assets/images/MYPIC.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
