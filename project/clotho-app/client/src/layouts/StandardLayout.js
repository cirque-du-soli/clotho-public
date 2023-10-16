// IMPORTS
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useRef } from 'react';

import logo from '../assets/logo.svg';
import '../assets/App.css';

// creates scrollbars on windows devices
import PerfectScrollbar from "perfect-scrollbar";

import routes from "../util/routes.js";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.layout === "StandardLayout") {
            return (
                <Route path={prop.path} element={prop.component} key={key} exact />
            );
        } else {
            return null;
        }
    });
};

function StandardLayout() {

    const mainPanelRef = useRef(null);

    return (
        <div className="App">
                <div className="main-panel" ref={mainPanelRef}>

                <Routes>
                    
                        {/* This adds all possible routes & views */}
                        {getRoutes(routes)} 

                        {/* Catch-all non-declared routes*/}
                        <Route path="/" element={<Navigate to="/app/home" replace />} />
                    
                    </Routes>

                </div>

        </div>
    );
}

export default StandardLayout;
