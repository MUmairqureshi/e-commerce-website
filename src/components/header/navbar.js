import React, { useState } from "react";
import './head.scss'
import {  Container, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import SearchIcon from '@mui/icons-material/Search';

import { Nav, Navbar } from "react-bootstrap";

export function Head() {
  const [prodstate, setProdstate] = useState([])


  return (
    <div className="header">


      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand className="brand-logo" cl="blue" href="#home">   <h3 className="brand h3">         <img src="data:image/webp;base64,UklGRj4DAABXRUJQVlA4TDIDAAAvecAKEK+DoG3bmO8BHt/fbhjEgslw8sfrGhEFbdtIS9s9xx/oUVDbtg0DT06V30DdASAAAAQBGCAIQCMAIBCExkIYAMMAjaAhAIcJRvBACCAExkEAg8MCEDQQ4cKDBQCNCST8gyRJX3p75U4Lfxc+ZNu2rbbNTlJmZmZmZmZmDu99RbavpPv/D2JZGqOPEf2fAPwX3HJ/5v6WXlp9dZ7k/JXVvTN18hvzv52c6pedr0n+u7D1wjTJVzt7ZOMdkou31gNYf2uR5J0NPbHy0jTJlzsATAHY8ZLk9KWVPTBx9BPJT8cmge3P5u9tASaPfSb56ehE121/QXL28mpg3fUFkvOXVwOrL8+SfLG909bdXCT5cBOw9PQf5n87OQVsekRy8ca67jrwh+SbvQD2vWXZN7sB7H1D8s+BzvpG/jy1BNjymFXvbAKWnPpJfu8s8st6YPXlOVafvbwaWP+FbFWStusBcOQb6/26B3jQLiMN4UYjWyYZjdJGNj+uie/rcYMoO7A1OEkerKQyRho1Aux9W8+veqyK41rCjKlgG8LSUz/HQK4KkuEQYwCsvb7QHpPEsS/JIg2CMGP9YAgMwiAuMfKMFzovz0We8YI4Mwz8xHp+KWDb8/YAQI6VTCaUQsBItshTsQVi5QcAjLKmAiYOfWhRIiluIlCpVMVRbcCKS9OtkOd5kgwaSCRpmA7yAkkjJJ4kl+eH1YBz7chPm7CSYgCjHCOFLnWxJJvjgDrOtkmugUgyyGacyuYMMD4GQCIpHIdRxo4Z/AJlTKWBJAcgLQqTOI6tta4LnCmKgKEqJZKMQ2oy8CXjAF/S2MkYI0kRnCQZo2owkmSUtYglyTeSAoxdvgEwUHGVNJNvgUiFrhtMhOwwE4VSBHiZOAepl7FeDkYmEzqU+7CqbTW61KFel6Yo69IUFf+Qb/c29LG5sT2zQPLxliY+7+osbHtCcvby6toOr0aX739H8tuJyZq6fvn5PyRf7qz24WD3AeuuL5C8vR7AuaLpi8vRj9uekJy+tHzZ07zFW+vRn/vfkvz7g7kvd6JXl576yfxvxyfRt2uuzZOcvbwafbzl/u+7m/H/Gg==" alt="Placholder Image 2" class="product-frame" /> </h3> </Navbar.Brand>

          <div class="collapse navbar-collapse nav-white" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="link active" to="/" >  HOME </Link>
              </li>
              <li class="nav-item">
                <Link className="link  active" to="/product"> PRODUCTS  </Link>
              </li>
              <li class="nav-item">
                <Link className="link  active" to="/">  ABOUT </Link>
              </li>

              <li class="nav-item">
                <Link className="link  active" to="/contact" >CONTACT </Link>
              </li>
            </ul>
          </div>
          <Nav className="shop-card">
            <Navbar.Text className="navbar-text">
              <a href="#login" className="shop-card "> Search<SearchIcon /> </a>
            </Navbar.Text>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-1 mb-lg-0">
                <li class="nav-item ">
                  <Link to="./login" class="nav-link active " aria-current="page" >
                    Login <AssignmentIndIcon />
                  </Link>
                </li>

              </ul>
            </div>
          </Nav>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">   <h3 className="brand h3">         <img src="data:image/webp;base64,UklGRj4DAABXRUJQVlA4TDIDAAAvecAKEK+DoG3bmO8BHt/fbhjEgslw8sfrGhEFbdtIS9s9xx/oUVDbtg0DT06V30DdASAAAAQBGCAIQCMAIBCExkIYAMMAjaAhAIcJRvBACCAExkEAg8MCEDQQ4cKDBQCNCST8gyRJX3p75U4Lfxc+ZNu2rbbNTlJmZmZmZmZmDu99RbavpPv/D2JZGqOPEf2fAPwX3HJ/5v6WXlp9dZ7k/JXVvTN18hvzv52c6pedr0n+u7D1wjTJVzt7ZOMdkou31gNYf2uR5J0NPbHy0jTJlzsATAHY8ZLk9KWVPTBx9BPJT8cmge3P5u9tASaPfSb56ehE121/QXL28mpg3fUFkvOXVwOrL8+SfLG909bdXCT5cBOw9PQf5n87OQVsekRy8ca67jrwh+SbvQD2vWXZN7sB7H1D8s+BzvpG/jy1BNjymFXvbAKWnPpJfu8s8st6YPXlOVafvbwaWP+FbFWStusBcOQb6/26B3jQLiMN4UYjWyYZjdJGNj+uie/rcYMoO7A1OEkerKQyRho1Aux9W8+veqyK41rCjKlgG8LSUz/HQK4KkuEQYwCsvb7QHpPEsS/JIg2CMGP9YAgMwiAuMfKMFzovz0We8YI4Mwz8xHp+KWDb8/YAQI6VTCaUQsBItshTsQVi5QcAjLKmAiYOfWhRIiluIlCpVMVRbcCKS9OtkOd5kgwaSCRpmA7yAkkjJJ4kl+eH1YBz7chPm7CSYgCjHCOFLnWxJJvjgDrOtkmugUgyyGacyuYMMD4GQCIpHIdRxo4Z/AJlTKWBJAcgLQqTOI6tta4LnCmKgKEqJZKMQ2oy8CXjAF/S2MkYI0kRnCQZo2owkmSUtYglyTeSAoxdvgEwUHGVNJNvgUiFrhtMhOwwE4VSBHiZOAepl7FeDkYmEzqU+7CqbTW61KFel6Yo69IUFf+Qb/c29LG5sT2zQPLxliY+7+osbHtCcvby6toOr0aX739H8tuJyZq6fvn5PyRf7qz24WD3AeuuL5C8vR7AuaLpi8vRj9uekJy+tHzZ07zFW+vRn/vfkvz7g7kvd6JXl576yfxvxyfRt2uuzZOcvbwafbzl/u+7m/H/Gg==" alt="Placholder Image 2" class="product-frame" /> </h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="nav-link">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-black" id="nav-link">

                <Link className="link  active  text-black" to="/" >   Home  </Link>
                <Link className="link  active  text-black" to="/product" >  PRODUCT  </Link>
                <Link className="link  active  text-black" to="/about" > ABOUT  </Link>
                <Link className="link  active  text-black" to="/contact" > CONTACT  </Link>
                <Link to="./login" class="nav-link active text-black" aria-current="page" >
                  <p> <AssignmentIndIcon /> Login </p>
                </Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />

              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
