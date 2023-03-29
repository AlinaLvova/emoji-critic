import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import AboutMe from "./AboutMe";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-us" element={<AboutUs />} />      </Routes>
    </div>
  );
}

export default App;