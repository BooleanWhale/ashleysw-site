import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article';
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
          <Route path="/blog/:id" element={<Article />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
