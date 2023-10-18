import { Link } from 'react-router-dom';
import { React, useState, } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import logoFull from '../../assets/images/clotho-logo-name-hiRes.png';
import LoginModalNavItem from './HeaderItems/LoginModalNavItem';
import LogoutNavItem from './HeaderItems/LogoutNavItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  // initial login state
  const [isLoggedIn, setIsLoggedIn] = useState(!(sessionStorage.getItem('token') === '' || sessionStorage.getItem('token') === null));

  // update login state (to rerender header)
  function popupChange(success, msg) {

    // first update states
    setIsLoggedIn(!(sessionStorage.getItem('token') === '' || sessionStorage.getItem('token') === null));

    // then update popup
    let options = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    } 
    success ? toast.success(msg, options) : toast.error(msg, options);
  }

  return (
    <>
      <Navbar
        color="light"
        light
        expand="md"
        id='header'
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logoFull}
            style={{
              height: 50
            }}
          />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="justify-content-end" style={{ width: "100%" }} navbar >
            {/* 
            <NavItem className="mx-auto mx-md-0">
            <NavLink href="/test001" className="nav-link">Test001</NavLink>
            </NavItem> 
            */}

            {/* 
            <NavItem className="mx-auto mx-md-0">
            <NavLink href="/listingsv2" className="nav-link">Listings V2</NavLink>
            </NavItem> 
            */}

            {/* 
            <NavItem className="mx-auto mx-md-0">
              <NavLink href="/admin" className="nav-link ml-auto">Admin</NavLink>
            </NavItem>
            */}

            <NavItem className="mx-auto mx-md-0">
              <NavLink href="/test" className="nav-link ml-auto">Dev</NavLink>
            </NavItem>

            

            {/* 
            <NavItem className="mx-auto mx-md-0">
              <NavLink href="/test/photoupload" className="nav-link">Photo Upload</NavLink>
            </NavItem>
            <NavItem className="mx-auto mx-md-0">
              <NavLink href="/test/createlisting" className="nav-link">Create Listing</NavLink>
            </NavItem>
            <NavItem className="mx-auto mx-md-0">
              <NavLink href="/test/listings" className="nav-link">Listings</NavLink>
            </NavItem>
            
//OBSOLETE: DELETE // TODO
            <NavItem className="mx-auto mx-md-0">
              <NavLink href="/test/login" className="nav-link">Login</NavLink>
            </NavItem>
*/}
            <LoginModalNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />
            <LogoutNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />

          </Nav>
        </Collapse>
      </Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Header;
