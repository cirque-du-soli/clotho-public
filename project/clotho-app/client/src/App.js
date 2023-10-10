// IMPORTS
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PhotoUpload from './components/PhotoUpload';


// Admin
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider'; // returns a Promise!




import logo from './logo.svg';
import './App.css';

function App() {



  <Admin dataProvider={dataProvider}>
    
  </Admin>






  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// return (
//   <Router>
//   <Routes>
//       <Route path="/photoupload" element={<PhotoUpload />} />
//   </Routes>
//   </Router>

// );
// }

export default App;
