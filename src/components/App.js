import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import AboutMe from "./AboutMe";
import Reviews from "./Reviews";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />      </Routes>
    </div>
  );
}

export default App;