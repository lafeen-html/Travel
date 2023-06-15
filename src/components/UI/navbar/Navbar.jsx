import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from './logo.png';

export default function Navbar(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (

    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={logo} alt="Travel" />
      </a>
      <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="nav mx-auto">

          <li className="nav-link">
            <NavLink to={`/`} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>Главная</span>
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink to={`/catalog`} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>Каталог</span>
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink to={`/contacts`} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>Контакты</span>
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>




  )
}