// IMPORT: React
import React from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// IMPORT: Styles
import logo from '../assets/logo.svg';
import '../assets/App.css';

// creates scrollbars on windows devices
import PerfectScrollbar from "perfect-scrollbar";

// IMPORT: Routes
import routes from "../util/routes.js";

// IMPORT: Components

///////////////////////////// ADD TEST COMPONENTS HERE ////////////////////////
import PhotoUpload from '../components/Forms/PhotoUpload';
import CreateListing from '../components/Forms/CreateListing';
import Header from '../components/Navbars/Header';
import { Auth } from '../context/Auth';
import PageNotFound from '../components/Pages/PageNotFound';
import Login from '../components/Forms/Login';
import Logout from '../components/Buttons/Logout';
import UserProfileV2 from '../components/Pages/UserProfileV2';

// import Listings from '../../TEMP/Listings';
// import ListingsV3 from '../../TEMP/ListingsV3';
// import UserProfile from './components/UserProfile';


const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.layout === "TestLayout") {
            return (
                <Route path={prop.path} element={prop.component} key={key} exact />
            );
        } else {
            return null;
        }
    });
};

function TestLayout(props) {

    const mainPanelRef = React.useRef(null);

    return (
        <div className="App">

            <div className="main-panel" ref={mainPanelRef}>

                <Routes>
                    {/* All possible routes, with the associated Test Component */}
                    {getRoutes(routes)}

                    {/* Catch-all non-declared routes*/}
                    <Route
                        path="/*"
                        element={<Navigate to="/test" replace />}
                    />

                </Routes>
            </div>

        </div>
    );
}

export default TestLayout;
