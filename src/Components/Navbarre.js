import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Form, FormControl,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbarre = () => {
  return (
    <div>
 <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      />
        <Nav.Link as={Link} to ="/Categories">Catégories</Nav.Link>
        <Nav.Link as={Link} to ="/Scategories">Sous Catégories</Nav.Link>
        <Nav.Link as={Link} to ="/Articles">Liste des Articles</Nav.Link>
        <Nav.Link as={Link} to ="/Articles/card">Liste Articles Card</Nav.Link>
        <Nav.Link as={Link} to ="/Articles/datatable">Liste article Data table</Nav.Link>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarre
