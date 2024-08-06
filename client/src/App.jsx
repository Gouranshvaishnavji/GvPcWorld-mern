import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUS from './pages/AboutUS' ;
import CustomPC from './pages/CustomPC' ;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/custom-pc" element={<CustomPC />} />
    </Routes>
  </Router>
);

export default App;

