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

import Login from '../../Forms/Login';
import PopupAlert from '../../Alerts/PopupAlertComp';

function LoginModal({ props, change }) {
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => {
        setModal(!modal);
        change();
    }

    return (
    <>
        {(props.isLoggedIn == true) ? (
            <NavItem className="mx-auto mx-md-0">
                <NavLink href='#' className="nav-link" onClick={toggle}>**Logged In**</NavLink>
            </NavItem>
        ) : (
            <NavItem className = "mx-auto mx-md-0">
                <NavLink href = '#' className = "nav-link" onClick = { toggle }>Log In</NavLink >
            </NavItem >        
        )}

        <div>
            

            <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
                <ModalHeader toggle={toggle}>Log In</ModalHeader>
                <ModalBody>
                    <Login />
                </ModalBody>

                {/* 
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
*/}

            </Modal>
            </div>
        </>
    );
}

export default LoginModal;