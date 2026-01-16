import React from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className=" bg-dark text-light pt-5 pb-3 mt-auto w-100">
            <Container fluid className="footer px-5">
                <Row className="g-0">
                    <Col xs={12} md={3} className='mb-3 px-3 footer-1'>
                        <img src="/logo.jpg" style={{ width: "120px" }} alt="logo" className="footer-img" />
                        <p className="mt-2">Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of global events.</p>
                    </Col>

                    <Col xs={12} md={3} className="mb-3 px-3 footer-2">
                        <h3>Corporate</h3>
                        <Nav className="d-flex flex-column">
                            <Nav.Link as={Link} to='/feedback' className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Feedback</Nav.Link>
                            <Nav.Link as={Link} to='/contactus'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to='/aboutus' className="footer-nav" onClick={() => window.scrollTo(0, 0)}>About Us</Nav.Link>
                            <Nav.Link as={Link} to='/privacypolicy'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to='/termsofservice'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Terms of Service</Nav.Link>
                            <Nav.Link as={Link} to='/cookiepolicy'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Cookie Policy</Nav.Link>
                        </Nav>
                    </Col>

                    <Col xs={12} md={3} className="mb-3 px-3 footer-3">
                        <h3>Categories</h3>
                        <Nav className="d-flex flex-column">
                            <Nav.Link as={Link} to='/pakistan' className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Pakistan</Nav.Link>
                            <Nav.Link as={Link} to='/world'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>World</Nav.Link>
                            <Nav.Link as={Link} to='/politics'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Politics</Nav.Link>
                            <Nav.Link as={Link} to='/business' className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Business</Nav.Link>
                            <Nav.Link as={Link} to='/sports' className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Sports</Nav.Link>
                            <Nav.Link as={Link} to='/technology'className="footer-nav"  onClick={() => window.scrollTo(0, 0)}>Technology</Nav.Link>
                        </Nav>
                    </Col>

                    <Col xs={12} md={3} className="mb-3 px-3">
                        <h3>Stay Updated</h3>
                        <p>Subscribe to our newsletter for daily news updates.</p>
                        <div className="d-flex align-items-center mb-3 ">
                            <input type="email" placeholder="Your email" name="email" className="form-control w-75 footer-input" />
                            <i className="bi bi-envelope-fill ms-2"></i>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            <img src="/logo.jpg" style={{ width: "80px" }} alt="news" />
                            <img src="/dramahublogo.jpg" style={{ width: "80px" }} alt="drama" />
                            <img src="/musikhublogo.jpg" style={{ width: "80px" }} alt="musik" />
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="g-0 mt-4">
                    <Col className="text-left f-note px-3">
                        <small>© 2026 NewsHub. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;