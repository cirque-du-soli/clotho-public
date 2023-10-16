import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// reactstrap components
import {
    Row,
    Col,
    Navbar,
} from "reactstrap";

function FooterPlaceholder() {

    // STATES

    // HOOKS


    return (
        <>
            <footer id="standardFooter" >
                <Row className='w-100'>
                    <Col className='d-flex text-start mx-4'>
                        <div className='align-self-center'>
                            <a href='/app/home'
                                className="
                                link-dark 
                                link-offset-2 
                                link-offset-3-hover 
                                link-underline
                                link-underline-opacity-0
                                link-underline-opacity-75-hover">
                                Home
                            </a>
                            <text> | </text>
                            <a href='/app/home'
                                className="
                                link-dark 
                                link-offset-2 
                                link-offset-3-hover 
                                link-underline
                                link-underline-opacity-0
                                link-underline-opacity-75-hover">
                                 Terms of Service
                            </a>
                            <text> | </text>
                            <a href='/app/home'
                                className="
                                link-dark 
                                link-offset-2 
                                link-offset-3-hover 
                                link-underline
                                link-underline-opacity-0
                                link-underline-opacity-75-hover">
                                Privacy Policy
                            </a>
                        </div>
                        
                    </Col>
                    <Col className='d-flex justify-content-end mx-3'>
                        <div  className='align-self-center'>
                            ©️ 2023: Group 4 Web Development
                        </div>
                    </Col>
                </Row>
            </footer>
            
        </>
    );
}

export default FooterPlaceholder;