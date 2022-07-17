import React from 'react';
import './App.css';
import SigninPage from './pages/signin';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages';


function App() {
  return (
    <Router>
      

      
      <Routes>
      <Route path="/" element={<Home/>} exact/>
        <Route path="/signin" element={<SigninPage/>} exact/>
      </Routes>
    
      
    </Router>
  );
}

export default App;
