import React from 'react'
import {NavLink} from "react-router-dom";
import '../styles/header.css';

type Props = {}

function Header({}: Props) {
  const getClassName = ({ isActive}:{ isActive: boolean }):string => {
    return isActive ? "active" : "";
  }
  return (
    <header className="header">
      <div className="header__content page-width">
        <div className="header__left">
        <nav className="header__links">
          <NavLink to="/" className={getClassName}>Home</NavLink>
          <NavLink to="/blog" className={getClassName}>About</NavLink>
        </nav>
        </div>
        <div className="header__center">
          <div className="header__logo">
            <span>LOGO</span>
          </div>
        </div>
        <div className="header__right">
          <div className="theme-toggle">🔆</div>
        </div>
      </div>
    </header>
  )
}

export default Header