import React, { useState } from "react";
import {
    Navbar, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [navState, setNavState] = useState({ isNavOpen: false, isModalOpen: false })

    let username;
    let password;
    let remember;
    const toggleNav = () => {
        setNavState({ ...navState, isNavOpen: !navState.isNavOpen })
    }

    const toggleModal = () => {
        setNavState({ ...navState, isModalOpen: !navState.isModalOpen });
    }

    const handleLogin = (event) => {
        toggleModal();
        alert("Username: " + username.value + " Password: " + password.value
            + " Remember: " + remember.checked);
        event.preventDefault();

    }

    return (
        <div>
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
                    <div>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                        <Modal isOpen={navState.isModalOpen} toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="username">Username</Label>
                                        <Input type="text" id="username" name="username"
                                            innerRef={(input) => username = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" name="password"
                                            innerRef={(input) => password = input} />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="remember"
                                                innerRef={(input) => remember = input} />
                                            Remember me
                                        </Label>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Login</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </Navbar>

        </div>
    );
}

export default Header