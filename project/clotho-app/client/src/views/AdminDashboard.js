import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import TestSquarePlaceholder from "../components/Temp/TestSquarePlaceholder";

import TestButton from "../components/TestButton";

function AdminDashboard(props) {


    return (
        <>
            <TestButton />

            <TestSquarePlaceholder />
            <TestSquarePlaceholder />

        </>
    );
}

export default AdminDashboard;
