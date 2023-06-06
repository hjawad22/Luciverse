import React from "react";
import '../Nav/Nav.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
    return (
        <nav className="nav-container">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/"}>
                <h1>LuciVerse</h1>
            </NavLink>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/About"}>
                <h3>ABOUT</h3>
            </NavLink>
        </nav>
    )
}


export default Nav;