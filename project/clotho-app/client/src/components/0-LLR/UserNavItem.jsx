import React, { useState } from 'react';
import {
    Button,
    Label,
    NavItem,
    NavLink,
} from 'reactstrap';

function UserNavItem({ props }) {

    const popupTBD = () => {
        // pass params up to header to display popup
        props.onClickProp("info", "This will show " + props.uname +"'s profile...", props.uname);
    }

    return (
        <>
            {
                (props.isLoggedIn && props.uname)
                &&
                <NavItem className="mx-auto mx-md-0 userNavItem">
                        <NavLink
                            href='/profile'
                            className="nav-link userNavItem"
                            onClick={popupTBD}
                        ><span className='userNavLinkText'>
                            {props.uname + " "}</span>
                            <img
                                className='avatarNavItem'
                                src={
                                    'https://robohash.org/'
                                    + (props.uname ? props.uname : 'default')
                                    + '?set=set4'
                                }
                            />
                        </NavLink >
                </NavItem >
            }
        </>
    );
}

export default UserNavItem;