// IMPORTS
import React from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import logo from '../assets/logo.svg';
import '..//assets/app.css';

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


