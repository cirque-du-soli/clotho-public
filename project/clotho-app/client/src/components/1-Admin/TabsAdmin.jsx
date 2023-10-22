import React from 'react';
// IMPORT: React
import { React, useState, use } from 'react';
import { Link } from 'react-router-dom';

// IMPORT: Popups
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/Header.css';

// IMPORT: Reactstrap
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavBar,
    NavItem,
    NavLink,
    Dropdown,
    Badge,
    Container,
    FormControl,
} from 'reactstrap';

// IMPORT: Images
import logoFull from '../../assets/images/clotho-logo-name-hiRes.png';

// IMPORT: Components
import NewUsersPerDayCard from './NewUsersPerDayCardAdmin';
import UsersList from '../Tables/UsersTable';
import LoaderSpinner from '../LoaderSpinner';

    function Header() {

        //  const navigate = useNavigate();
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

        // initial login state
        const [isLoggedIn, setIsLoggedIn] = useState(!(sessionStorage.getItem('token') === '' || sessionStorage.getItem('token') === null));
        const [isAdmin, setIsAdmin] = useState((sessionStorage.getItem('isAdmin') === 'true'));
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


                            <HomeNavItem props={{ isLoggedIn: isLoggedIn, isAdmin: isAdmin, onSubmitProp: popupChange }} />
                            <LoginNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange, uname: signupUname }} />
                            <LogoutNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />
                            <SignupNavItem props={{ isLoggedIn: isLoggedIn, onSubmitProp: popupChange }} />
                            <AdminNavItem props={{ isLoggedIn: isLoggedIn, isAdmin: isAdmin, onSubmitProp: popupChange }} />
                            <DevNavItem props={{ isLoggedIn: isLoggedIn }} />
                            <UserNavItem props={{ isLoggedIn: isLoggedIn, uname: uname, onClickProp: popupChange }} />

                        </Nav>
                        {/* <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" size="1.5em" />
                <Badge>{cart.length}</Badge> {}
              </Dropdown.Toggle>
            </Dropdown>
            </Nav>   */}
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
















<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>