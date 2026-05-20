import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



// Inline SVG assets for a self-contained component
const LinkedInIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM134.4 392c-15.6 0-28.8-13.2-28.8-28.8V216c0-15.6 13.2-28.8 28.8-28.8h.9c15.6 0 28.8 13.2 28.8 28.8V363.2c0 15.6-13.2 28.8-28.8 28.8h-.9zm-15.3-214.7c-9.1-9.1-14.2-21.7-14.2-34.7 0-13 5.1-25.6 14.2-34.7C105.7 108.6 118.3 103.5 131.3 103.5c13 0 25.6 5.1 34.7 14.2 9.1 9.1 14.2 21.7 14.2 34.7 0 13-5.1 25.6-14.2 34.7-9.1 9.1-21.7 14.2-34.7 14.2-13 0-25.6-5.1-34.7-14.2zm204.8 214.7H240V287.6c0-43.2-16.1-70.5-55.9-70.5-30.8 0-48.4 20.8-56.5 35.8-3.9 7.2-5.7 16.5-5.7 26.3v100.3h-47.3s.6-163.6 0-180h47.3v21.5c-3.1-6.1-9.4-14.6-15.9-22.1-13.8-15.9-32.9-29.4-60.8-29.4-44.5 0-78.5 24.3-78.5 76.7v141.6h47.3V287.6c0-15.6 4.7-27.1 20.2-27.1 15.6 0 18.8 11.5 18.8 27.1v104.4h47.3V287.6c0-15.6 4.7-27.1 20.2-27.1 15.6 0 18.8 11.5 18.8 27.1v104.4h47.3z"/>
    </svg>
);

const GithubIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
        <path d="M165.9 397.4c-2.4 4.1-5.1 7.8-8.1 11.3c-23.4 34.6-13.6 98.6 15.9 122.5c33.2 27.5 119.5 71.5 188.1-14.5c.3-.5.6-1.1.9-1.6c4-6.3 7.8-12.8 11.3-19.6c4.6-8.5 8.9-17.1 12.8-25.9c3.9-8.7 7.4-17.5 10.5-26.4c3.1-8.9 5.8-17.8 8.2-26.8c2.4-9 4.3-18.1 5.8-27.2c1.5-9.1 2.5-18.3 3.1-27.5c.6-9.2 .8-18.5 .8-27.7c0-117.8-49.8-212.8-164.2-212.8C103.8 32 54 127 54 244.8c0 9.2 .2 18.5 .8 27.7c.6 9.2 1.5 18.3 3.1 27.5c1.5 9.1 3.4 18.1 5.8 27.2c2.4 9 5.1 17.9 8.2 26.8c3.1 8.9 6.6 17.7 10.5 26.4c3.9 8.7 8.2 17.3 12.8 25.9c3.5 6.8 7.3 13.3 11.3 19.6c.3 .5 .6 1.1 .9 1.6c11.3 18.2 25.6 34.3 43.1 48.1c3.1 2.4 5.9 4.9 8.5 7.7z"/>
    </svg>
);

const WebsiteIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
        <path d="M576 344c0 10.3-4.1 20.2-11.4 27.5L468.5 478.6c-15.2 15.2-34.5 22.4-53.7 22.4H161.2c-19.2 0-38.5-7.2-53.7-22.4L11.4 371.5C4.1 364.2 0 354.3 0 344V168c0-10.3 4.1-20.2 11.4-27.5L107.5 33.4c15.2-15.2 34.5-22.4 53.7-22.4h253.6c19.2 0 38.5 7.2 53.7 22.4L564.6 140.5c7.3 7.3 11.4 17.2 11.4 27.5V344zm-216-72c0-13.3-10.7-24-24-24h-72c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h72c13.3 0 24-10.7 24-24v-48z"/>
    </svg>
);


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