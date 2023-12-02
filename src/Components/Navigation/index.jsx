import React from "react";
import { NavLink, Link } from "react-router-dom";
import './nav.scss';

const Navigation = () => {
    return (
         <nav className="navigation">
            <NavLink to="/" exact="true" className="navigation--home">Home</NavLink>
            <NavLink to="/about" exact="true" className="navigation--about">Profil</NavLink>
            <NavLink to="/portfolio" exact="true" className="">Portfolio</NavLink>        
            <Link to="https://drive.google.com/file/d/10QLK9EyBRGJ-exjfnqrDYBFZlSazzriI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Mon CV</Link>
        </nav>
    )
};

export default Navigation;