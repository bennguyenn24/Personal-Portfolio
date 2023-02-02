import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

 const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll'. onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skill"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact"className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Me</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a>
            </div>
            <button className='' onClick={() => console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;