import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-gray-800 text-white">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src="/logo.jpeg"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{mixBlendMode:'color-burn' , color:'white'}}
            />
          </Navbar.Brand>
        <Navbar.Brand href="#" className='text-4xl text-white font-bold font-serif'>Job Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Nav className="d-flex gap-10 justify-center items-center text-lg ">
          <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>About</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>Jobs</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>Signup</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>Login</Nav.Link>

            {/* <Button variant="outline-success">Search</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Header;