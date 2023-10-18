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

function LoginModal({ props }) {
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => {
        setModal(!modal);
    }

    const onLoginFormSubmit = (success, msg) => {
        toggle();

        // pass params up to parent component to display popup
        props.onSubmitProp(success, msg);
    }



    return (
        <>


            {
                !props.isLoggedIn
                &&
                <NavItem className = "mx-auto mx-md-0">
                    <NavLink href = '#' className = "nav-link" onClick = { toggle }>Log In</NavLink >
                </NavItem >        
            }
            

           {/*  OLD: WORKING
           {(props.isLoggedIn) ? (
                <NavItem className="mx-auto mx-md-0">
                    <NavLink href='#' className="nav-link" >**Logged In**</NavLink>
                </NavItem>
            ) : (
                <NavItem className = "mx-auto mx-md-0">
                    <NavLink href = '#' className = "nav-link" onClick = { toggle }>Log In</NavLink >
                </NavItem >        
            )} 
            */}

        <div>
            

            <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
                <ModalHeader toggle={toggle}>Log In</ModalHeader>
                <ModalBody>
                        <Login props={{ onSubmitProp: onLoginFormSubmit}} />
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