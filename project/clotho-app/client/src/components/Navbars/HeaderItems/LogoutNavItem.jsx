import { useRef, useState, useEffect } from 'react';
import useAxiosJWT from '../../../hooks/useAxiosJWT';

import PopupAlert from '../../Alerts/PopupAlertComp';

import {
    NavItem,
    NavLink,
} from 'reactstrap';

function Logout({ props, change }) {

    const errRef = useRef();
    const [logoutErrorMessage, setLogoutErrorMessage] = useState('');
    //const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const axiosJWT = useAxiosJWT();

    let logoutMessage = '';

    useEffect(() => {
        setLogoutErrorMessage('');
    }, [])

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosJWT.delete('/auth/logout');
            console.log(response?.data);
            sessionStorage.setItem('token', '');
            sessionStorage.setItem('refreshToken', '');
            sessionStorage.setItem('isAdmin', '');
            sessionStorage.setItem('userId', '');
            sessionStorage.setItem('username', '');
            //setIsLoggedIn(false);

            // soli test
            logoutMessage = 'You have been successfully logged out.';

            change();

        } catch (err) {
            if (!err?.response) {
                <PopupAlert props={{ msg: 'No Server Response' }} />
            } else if (err.response?.data?.message) {
                console.log(err);
                <PopupAlert props={{ msg: err.response.data.message }} />
            } else {
                console.log(err);
                <PopupAlert props={{ msg: "Logout Failed!" }} />
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {(props.isLoggedIn == true) ? (
                <NavItem className="mx-auto mx-md-0">
                    <NavLink href='#' className="nav-link" onClick={handleLogout}>Logout</NavLink>
                </NavItem>
            ) : (
                <NavItem className="mx-auto mx-md-0">
                    <NavLink href='#' className="nav-link" >**Logged Out**</NavLink>
                </NavItem>
            )}
        </>
    )
}

export default Logout