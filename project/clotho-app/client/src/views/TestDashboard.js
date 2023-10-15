import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import TestSquarePlaceholder from "../components/Temp/TestSquarePlaceholder";

// IMPORT: Routes
import routes from "../util/routes.js";

function TestDashboard(props) {

    const listRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "TestLayout") {
                return (
                    <li key={key}><a href={"/test" + prop.path}>{prop.name}</a></li>
                );
            } else {
                return null;
            }
        });
    };

    return (
        <>
            <h1>Test Dashboard</h1>
            <ul style={{ textAlign: "left" , marginLeft: "200px"}} >
                {listRoutes(routes)}
            </ul>
        </>
    );
}

export default TestDashboard;