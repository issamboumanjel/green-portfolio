
import './Footer.css';
import icons from "../../../utils/icons.js";

const Footer = () => {
  return (
    <footer>
      <div className="media-links">
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
      <p>Isame Boumanjel</p>
      <p className="copyright">© {new Date().getFullYear()} Isame Boumanjel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;