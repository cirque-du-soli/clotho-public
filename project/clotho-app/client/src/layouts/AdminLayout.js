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
import Header from "../components/Navbars/Header";
import TestSquarePlaceholder from '../components/Misc/TestSquarePlaceholder';
import FooterPlaceholder from "../components/Navbars/FooterPlaceholder";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.layout === "AdminLayout") {
            return (
                <Route path={prop.path} element={prop.component} key={key} exact />
            );
        } else {
            return null;
        }
    });
};

function AdminLayout(props) {

    const mainPanelRef = React.useRef(null);




    return (
        <div className="App">

            <Header />

            <div className="main-panel" ref={mainPanelRef}>
                <Routes>
                    {/* This adds all possible routes & views */}
                    {getRoutes(routes)}

                    {/* Catch-all non-declared routes*/}
                    <Route
                        path="/"
                        element={<Navigate to="/admin/dashboard" replace />}
                    />
                </Routes>
            </div>

            <FooterPlaceholder />

        </div>
    );
}

export default AdminLayout;
