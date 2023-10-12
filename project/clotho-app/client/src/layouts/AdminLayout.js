// IMPORTS
import React from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import logo from '../assets/logo.svg';
import '../assets/App.css';

// creates scrollbars on windows devices
import PerfectScrollbar from "perfect-scrollbar";
import routes from "../util/routes.js";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
            return (
                <Route path={prop.path} element={prop.component} key={key} exact />
            );
        } else {
            return null;
        }
    });
};


function AdminLayout() {

    const mainPanelRef = React.useRef(null);

    return (
        <div className="App">
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <div className="main-panel" ref={mainPanelRef}>

                    <Routes>
                        {getRoutes(routes)}
                        <Route
                            path="/"
                            element={<Navigate to="/admin/dashboard" replace />}
                        />
                    </Routes>

                </div>

            </header>
        </div>
    );
}

export default AdminLayout;
