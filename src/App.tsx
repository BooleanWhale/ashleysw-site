import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog.js'
import Header from './sections/Header'
import './App.css';
import './styles/base.css';

function App() {
  return (
    <Router>
      <Header/>
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
