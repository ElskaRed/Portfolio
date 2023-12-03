import React from "react";
import { NavLink, Link } from "react-router-dom";
import './nav.scss';

const Navigation = () => {
    return (
         <nav className="navigation">
            <NavLink to="/" exact="true" className="navigation__link">ACCUEIL</NavLink>
            <NavLink to="/about" exact="true" className="navigation__link">PROFIL</NavLink>
            <NavLink to="/portfolio" exact="true" className="navigation__link">PROJETS</NavLink>        
            <Link to="https://drive.google.com/file/d/10QLK9EyBRGJ-exjfnqrDYBFZlSazzriI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="navigation__link">MON CV</Link>
        </nav>
    )
};

export default Navigation;