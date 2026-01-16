import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

function MyNavbar() {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed-top shadow-sm w-100" style={{ backgroundColor: "white" }}>
      <div className="head-1 py-2">
        <Container className="topbar d-flex gap-4 head-1-con">
          <Link to="/prayertimings" className=" text-decoration-none head1-link" onClick={() => window.scrollTo(0, 0)}>Prayer Timings</Link>
          <Link to="/goldrates" className="text-decoration-none head1-link" onClick={() => window.scrollTo(0, 0)}>Gold Rates</Link>
          <Link to="/currencyexchange" className=" text-decoration-none head1-link" onClick={() => window.scrollTo(0, 0)}>Currency Exchange</Link>
        </Container>
      </div>

      <div className="bg-white py-3 border-bottom">
  <Container fluid className="px-5">
    <Row className="align-items-center justify-content-between">
      <Col className="fw-bold head-2 text-start">
        {today}
      </Col>
      <Col className="text-end">
        <img src="/logo.jpg" style={{ width: "120px" }} alt="NewsHub" />
      </Col>
    </Row>
  </Container>
</div>


      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto links">
              <Nav.Link as={Link} to="/" className='navlink' onClick={() => window.scrollTo(0, 0)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/pakistan" className='navlink' onClick={() => window.scrollTo(0, 0)}>Pakistan</Nav.Link>
              <Nav.Link as={Link} to="/world" className='navlink' onClick={() => window.scrollTo(0, 0)}>World</Nav.Link>
              <Nav.Link as={Link} to="/politics" className='navlink' onClick={() => window.scrollTo(0, 0)}>Politics</Nav.Link>
              <Nav.Link as={Link} to="/business" className='navlink' onClick={() => window.scrollTo(0, 0)}>Business</Nav.Link>
              <Nav.Link as={Link} to="/sports" className='navlink' onClick={() => window.scrollTo(0, 0)}>Sports</Nav.Link>
              <Nav.Link as={Link} to="/technology" className='navlink' onClick={() => window.scrollTo(0, 0)}>Technology</Nav.Link>
              <Nav.Link as={Link} to="/health" className='navlink' onClick={() => window.scrollTo(0, 0)}>Health</Nav.Link>
              <Nav.Link as={Link} to="/entertainment" className='navlink' onClick={() => window.scrollTo(0, 0)}>Entertainment</Nav.Link>
              <Nav.Link className='navlink'><i className="bi bi-search"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;