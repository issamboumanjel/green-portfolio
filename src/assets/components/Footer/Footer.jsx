import './Footer.css'
import icons from "../../../utils/icons.js";

const Footer = () => {
  return (
    <footer>
        <div className="media-links">
          <a href=""><icons.FaFacebook /></a>
          <a href=""><icons.FaInstagramSquare /></a>
          <a href=""><icons.FaGithub /></a>
          <a href=""><icons.FaLinkedin /></a>
        </div>
        <p>Isame Bouamanjel</p>
        <p className="copyright">&copy; Isame Bouamanjel. All rights reserved.</p>
    </footer>
  )
}

export default Footer
