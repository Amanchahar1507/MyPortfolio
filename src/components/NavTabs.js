import React, { useEffect, useState } from 'react';
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import resumeUrl from '../images/AmanChaharResume.pdf'
// import { CiMenuBurger } from "react-icons/ci";

// import { Link } from 'react-router-dom';
import menu from '../images/circlemenu.png'
function NavTabs({ currentPage, handlePageChange }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handlePageChangeAndClose = () => {
    // handlePageChange(page);
    handleClose();
  };
  useEffect(() => {
    const navbar = document.querySelector('.navigationbar');
    const textcolor = document.getElementById('textcolor');

    const handleScroll = () => {
      if (navbar && window.scrollY > 100) {
        navbar.classList.add('scrolled');
        if (textcolor) {
          textcolor.style.color = 'white'
        }
      } else if (navbar) {
        navbar.classList.remove('scrolled');
        if (textcolor) {
          textcolor.style.color = '' // Reset to default color
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
 <main>
      <nav className="navbar navbar-expand-lg bg-body-none fixed-top  navbarcontainer navigationbar">
       
        <div id="logo" className="pull-left">
           <h4><a href="#hero">Aman Chahar</a> </h4>
       </div>
       <Button className="navbar-toggler p-none bg-green hover:bg-none"  onClick={handleShow}>
          <img className='navbutton' style={{backgroundColor: 'white', borderRadius:'100%'}} src={menu} alt="" />
        </Button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-menu">
          <li className="nav-item">
        <a
          href="#about"
          // onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="navbarLinks"

        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          // onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="navbarLinks"
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          // onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="navbarLinks"
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          // onClick={() => handlePageChange('Resume')}
                href={resumeUrl} rel="noreferrer" target="_blank" download = "AmanChaharResume.pdf"
          className="navbarLinks"
        >
          Resume
        </a>
      </li>
           </ul>
          </div>
       
      </nav>
      <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
  <Nav className="navbar-nav">
    <Nav.Link
      href="#about"
      onClick={() => handlePageChangeAndClose('About')}
      className='nav-link text-center text-center'
    >
      About
    </Nav.Link>
    <Nav.Link
      href="#projects"
      onClick={() => handlePageChangeAndClose('Portfolio')}
      className='nav-link text-center text-center'
    >
      Projects
    </Nav.Link>
    <Nav.Link
      href="#contact"
      onClick={() => handlePageChangeAndClose('Contact')}
      className='nav-link text-center text-center'
    >
      Contact
    </Nav.Link>
    <Nav.Link
      href={resumeUrl} target="_blank" download = "Ankush_Resume.pdf"
      onClick={() => handlePageChangeAndClose('Resume')}
      className= 'nav-link text-center text-center'
    >
      Resume
    </Nav.Link>
  </Nav>
</Offcanvas.Body>

      </Offcanvas>
      </main>
  );
}
export default NavTabs;
