import React, { useState } from "react";
import { Nav, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [navState, setNavState] = useState({ isNavOpen: false })

    const toggleNav = () => {
        setNavState({ isNavOpen: !navState.isNavOpen })
    }
    return (
        <>
            <Navbar dark color='primary'>
                <div className='container'>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={navState.isNavOpen} navbar>
                        <Nav navbar>
                            <NavLink style={{ color: "black" }} to='/home' onClick={toggleNav}>Home</NavLink>
                            <NavLink style={{ color: "black" }} to='/aboutus' onClick={toggleNav}>About Us</NavLink>
                            <NavLink style={{ color: "black" }} to='/menu' onClick={toggleNav}>Menu</NavLink>
                            <NavLink style={{ color: "black" }} to='/contactus' onClick={toggleNav}>Contact Us</NavLink>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default Header