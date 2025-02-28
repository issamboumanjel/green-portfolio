
import './Footer.css';
import icons from "../../../utils/icons.js";

const Footer = () => {
  return (
    <footer>
      <div className="media-links">
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Facebook profile"
        >
          <icons.FaFacebook />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram profile"
        >
          <icons.FaInstagramSquare />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <icons.FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
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