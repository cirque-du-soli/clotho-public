import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/" className="navbar-brand">Clotho</Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/admin" className="nav-link">Admin</Link>
        </NavItem>
        <NavItem>
          <Link to="/test001" className="nav-link">Test001</Link>
        </NavItem>
        <NavItem>
          <Link to="/photoupload" className="nav-link">Photo Upload</Link>
        </NavItem>
        <NavItem>
          <Link to="/createlisting" className="nav-link">Create Listing</Link>
        </NavItem>
        <NavItem>
          <Link to="/listings" className="nav-link">Listings</Link>
        </NavItem>
        <NavItem>
          <Link to="/listingsv2" className="nav-link">Listings V2</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
