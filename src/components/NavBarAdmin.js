import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export const NavBarAdmin = () => {
    // Removed unused state and effects from the original code for simplicity.

    return (
        <Navbar 
            expand="md" 
            // Explicitly set background color to black via style to ensure override
            style={{ backgroundColor: '#000' }} 
            variant="dark" 
            className="shadow-lg" 
        >
            <Container>
                {/* Left Logo / Brand */}
                <Navbar.Brand 
                    as={Link} 
                    to="/admin/new" 
                    className="fw-bold fs-4 text-white"
                >
                    ADMIN DASHBOARD
                </Navbar.Brand>
                
                {/* Toggle button for mobile/collapsed state */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                
            </Container>
        </Navbar>
    );
};

// Add default export to resolve the "Element type is invalid" error
export default NavBarAdmin;