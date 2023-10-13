// IMPORTS //
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PhotoUpload from './components/PhotoUpload';
import CreateListing from './components/CreateListing';
import AdminLayout from './layouts/AdminLayout';

import 'bootstrap/dist/css/bootstrap.css';

// STYLES //
import './index.css';
import './assets/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/test001" element={<App />} />
        <Route path="/photoupload" element={<PhotoUpload />} />
        <Route path="/createlisting" element={<CreateListing />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


/* UNUSED DEFAULTS */
//import reportWebVitals from './reportWebVitals';
//reportWebVitals();
// Pass a function to log results (e.g: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




// return (
//   <Router>
//   <Routes>
//       <Route path="/photoupload" element={<PhotoUpload />} />
//   </Routes>
//   </Router>

// );
// }