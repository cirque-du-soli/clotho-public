// IMPORT: React
import { React, useState, } from 'react';
import { Link } from 'react-router-dom';

// IMPORT: Popups
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORT: Reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
<<<<<<< Updated upstream
import logoFull from '../../assets/images/clotho-logo-name-hiRes.png';
import userIcon from '../../assets/images/avatar.png';
import LoginModalNavItem from './HeaderItems/LoginModalNavItem';
import LogoutNavItem from './HeaderItems/LogoutNavItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
=======

// IMPORT: Images
import logoFull from '../../assets/images/clotho-logo-name-hiRes.png';

// IMPORT: Components
import LoginNavItem from '../0-LLR/LoginNavItem';
import SignupNavItem from '../0-LLR/SignupNavItem';
import LogoutNavItem from '../0-LLR/LogoutNavItem';
import DevNavItem from '../0-LLR/DevNavItem';
import AdminNavItem from '../0-LLR/AdminNavItem';
import UserNavItem from '../0-LLR/UserNavItem';

/* // OLD WORKING:
import Login from '../0-LLR/Login';
import LoginModalNavItem from './HeaderItems/LoginModalNavItem';
>>>>>>> Stashed changes
import Signup from '../Forms/Signup';
import SignupModalNavItem from './HeaderItems/SignupModalNavItem';
import LogoutNavItem from './HeaderItems/LogoutNavItem';
*/

function Header() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // initial login state
  const [isLoggedIn, setIsLoggedIn] = useState(!(sessionStorage.getItem('token') === '' || sessionStorage.getItem('token') === null));
  const [uname, setUname] = useState(sessionStorage.getItem('username'));
  const [signupUname, setSignupUname] = useState('');

  function popupChange(success, msg, signupUname) {

    // update state (re-renders header)
    setIsLoggedIn(!(sessionStorage.getItem('token') === '' || sessionStorage.getItem('token') === null));

    // set uname state for header
    setUname(sessionStorage.getItem('username'));
    setSignupUname(signupUname);

    // update popup
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

  // same as above, but transfer to log in modal
  function popupChangeSignup(success, msg, uname) {
    popupChange(success, msg);

    // set username in login form
    // TODO:

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
              height: 40
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="justify-content-end" style={{ width: "100%" }} navbar >

<<<<<<< Updated upstream
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

            {/* <NavItem className="mx-auto mx-md-0">
              <NavLink href="/test" className="nav-link ml-auto">Dev</NavLink>
            </NavItem>

             */}

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

            <SignupModalNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />
            
            {isLoggedIn ? (
              <img className='rounded-circle'
                alt="user menu"
                src={userIcon}
                style={{
                  height: 30
                }}
                onClick={() => navigate(`/${sessionStorage.getItem('username')}`)}
              />
            ) : (<></>)}
=======
            <LoginNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange, uname: signupUname }} />
            <LogoutNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />
            <SignupNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />
            <AdminNavItem props={{ isLoggedIn: isLoggedIn }} />
            <DevNavItem props={{ isLoggedIn: isLoggedIn }} />
            <UserNavItem props={{ isLoggedIn: isLoggedIn, uname: uname, onClickProp: popupChange}} />

>>>>>>> Stashed changes
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