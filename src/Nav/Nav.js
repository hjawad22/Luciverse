import React from "react";
import '../Nav/Nav.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
    return (
        <nav className="nav-container">
            <div className="logo-container">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/"}>
                <h1 className="logo">LuciVerse</h1>
            </NavLink>
            </div>
            <div className="about-container"> 
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/About"}>
                <h2 className="about">About</h2>
            </NavLink>
            </div>
        </nav>
    )
}


export default Nav;