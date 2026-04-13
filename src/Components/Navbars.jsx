import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import '../Styles/Navbars.css';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

function NavCustom() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('top');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
    <Navbar
      collapseOnSelect
      expand="lg"
      id="navbar"
      className={scrolled ? 'scrolled' : ''}
      sticky="top"
    >
      <Container fluid className="nav-container">

        {/* ── Brand ── */}
        <div className="nav-brand">
          <div className="nav-logo-wrap">
            <Image src="./eclogowhite.png" width={40} height={40} className="nav-logo" />
            <div className="nav-logo-ring" />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-main">ECE</span>
            <span className="nav-brand-sub">Billboard</span>
          </div>
        </div>

        {/* ── Mobile toggle ── */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggler">
          <span className="toggler-bar" />
          <span className="toggler-bar" />
          <span className="toggler-bar short" />
        </Navbar.Toggle>

        {/* ── Links ── */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links-wrap">
            {links.map(({ label, to }) => (
              <Nav.Link key={to} className="nav-item-wrap">
                <Link
                  to={to}
                  smooth
                  duration={500}
                  offset={-62}
                  className={`nav-link-item ${activeLink === to ? 'active' : ''}`}
                  onSetActive={() => setActiveLink(to)}
                  spy
                >
                  {label}
                </Link>
              </Nav.Link>
            ))}

            {/* CTA pill */}
          
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavCustom;