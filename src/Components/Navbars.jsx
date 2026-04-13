import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import '../Styles/Navbars.css';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

function NavCustom() {
  // Add scrolled class for shadow
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
      if (window.scrollY > 10) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home',          to: 'top' },
    { label: 'Oppam',         to: 'oppam' },
    { label: 'Notifications', to: 'billboard' },
    { label: 'Gallery',       to: 'gallery' },
    { label: 'Contact',       to: 'contacts' },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" sticky="top">
      <Container fluid>
        {/* Brand */}
        <div className="props">
          <Image src="./eclogowhite.png" width={46} height={46} />
          <div className="title">ECE Billboard</div>
        </div>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ label, to }) => (
              <Nav.Link key={to}>
                <Link to={to} smooth duration={500} offset={-62}>
                  {label}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCustom;