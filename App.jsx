import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Nav from './Components/Nav';
// Users
import Login from './Users/Login';
import Signup from './Users/Signup';

const App = () =>{
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;