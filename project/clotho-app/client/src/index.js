// IMPORT: React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
<<<<<<< Updated upstream
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PhotoUpload from './components/PhotoUpload';
// import Listings from '../../TEMP/Listings';
import Listings from './components/Listings';
// import ListingsV3 from '../../TEMP/ListingsV3';
import CreateListing from './components/CreateListing';
import AdminLayout from './layouts/AdminLayout';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import Login from './components/Forms/Login';
import Logout from './components/Forms/Logout';
// import UserProfile from './components/UserProfile';
import UserProfileV2 from './components/UserProfileV2';
=======
>>>>>>> Stashed changes

// IMPORT: Styles
import './index.css';
import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.css';

// IMPORT: Layouts
import AdminLayout from './layouts/AdminLayout';
import StandardLayout from './layouts/StandardLayout';

// IMPORT: Contexts
//import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
//import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

// SETUP: root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app/*" element={<StandardLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* 
        <Route path="/app/*" element={<Navigate to="/app/home" replace />} />
        <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
         */}
        
        <Route path="/*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




