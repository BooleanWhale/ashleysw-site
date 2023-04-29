import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Home from './pages/Home.js'
import Blog from './pages/Blog.js'
import './App.css';

function App() {
  const getClassName = ({ isActive}:{ isActive: boolean }):string => {
    return isActive ? "active" : "";
  }

  return (
    <Router>
      <nav>
        <NavLink to="/" className={getClassName}>Home</NavLink>
        <NavLink to="/blog" className={getClassName}>About</NavLink>
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
