import Navigation from "../Navigation/index";
import logo from '../../assets/images/logo.png';
import './header.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <NavLink to="/" exact="true">
                <img src={logo} alt="Logo Elska" className="header__logo" />
            </NavLink>
            <Navigation />
        </div>
    );
};

export default Header;