//IMPORT: React
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// IMPORT: Components
import TestSquarePlaceholder from "../components/PLACEHOLDERS/TestSquarePlaceholder";
import Listings from "../components/Tables/Listings";

function StandardDashboard(props) {

    return (
        <>
            <div className="text-center">
                <h1>Standard Dashboard</h1>
                {/* <Listings /> */}
                <TestSquarePlaceholder details={{ text: "This is where the listings will be shown" }} />

            </div>
        </>
    );
}

export default StandardDashboard;