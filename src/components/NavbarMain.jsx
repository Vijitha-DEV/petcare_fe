import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const NavbarMain = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access');
        navigate('/login');
    };

    const handleHome = () => {
        navigate('/dashboard');
    };

    return (
        <Navbar
            style={{ backgroundColor: '#f5518d', zIndex: 999 }}
            expand="lg"
            className="sticky-top shadow-sm"
        >
            <Container>
                <Nav>
                    <button className="btn btn-success" onClick={handleHome}>
                        Home
                    </button>
                </Nav>
                <Nav className="ms-auto">
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarMain;