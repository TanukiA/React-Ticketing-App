import { Nav, Navbar, Container } from 'react-bootstrap';
import appLogo from '../assets/img/app-logo.png';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
              alt="App Logo"
              src={appLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            DigitalExpo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#ticket">My Ticket</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;