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
    Alert,
    UncontrolledAlert,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from 'reactstrap';

// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

function PopupAlert({ props }) {

    const notificationAlertRef = React.useRef(null);
    
    const pop = () => {
        var options = {};
        options = {
            place: "tc",
            message: (
                <div>
                    <div>
                        {props.msg}
                    </div>
                </div>
            ),
            type: "warning",
            autoDismiss: 5,
        };

        notificationAlertRef.current.notificationAlert(options);
    };


    return (
        <>
            <div className="popupAlertContent">
                <div className="react-notification-alert-container">
                    <NotificationAlert ref={notificationAlertRef} />
                </div>

                <Button
                    className="btn-round"
                    size='lg'
                    color="warning"
                    onClick={pop}
                >
                    Test Alert
                </Button>
            </div>
        </>
    );
}

export default PopupAlert;
