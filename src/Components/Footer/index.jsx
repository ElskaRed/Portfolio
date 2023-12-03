import logo from '../../assets/images/logo.png';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className="footer">
            <button className="footer__mail" onClick={() => window.location = 'mailto:vignon.roxanne@gmail.com'}>Contact</button>
            <img src={logo} alt="logo Elska" className="footer__logo"/>
            <div className="footer__liens">
                <a href="https://github.com/ElskaRed" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="xl" icon={faGithub} style={{ color: "#ffffff" }} />
                </a>
                <a href="https://www.linkedin.com/in/roxanne-vignon-94438a289" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: "#ffffff" }} />
                </a>
            </div>
        </div>
    );
};

export default Footer;