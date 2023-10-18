import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
    NavItem,
    NavLink,
} from 'reactstrap';

import Signup from '../../Forms/Signup';
import Login from '../../Forms/Login';

function SignupModalNavItem({ props }) {
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => {
        setModal(!modal);
    }

    const onSignupFormSubmit = (success, msg) => {

        // hide modal after form submission
        toggle();

        // pass params up to parent component to display popup
        props.onSubmitProp(success, msg);
        

    }

    return (
        <>
            {
                !props.isLoggedIn
                &&
                <NavItem className="mx-auto mx-md-0" >
                    <NavLink href='#' className="nav-link" onClick={toggle} >Sign Up</NavLink >
                </NavItem >
            }

            <div>
                <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
                    <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Signup props={{ onSubmitProp: onSignupFormSubmit }} />
                    </ModalBody>
                </Modal>
            </div>
        </>
    );
}

export default SignupModalNavItem;