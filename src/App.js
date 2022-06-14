import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;