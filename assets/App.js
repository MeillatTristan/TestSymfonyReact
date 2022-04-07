// !COMPONENTS
import Home from './components/Home';
import Navbar from './components/Navbar';

// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/api/users' />
      </Routes>
    </Router>
  );
};

export default App;
