import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from './logo.png';
import OutlineButton from '../buttons/OutlineButton';
import Modal from '../modal/Modal';
import InfoNavbar from '../../InfoNavbar/InfoNavbar';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name">
        <img src={logo} alt="Travel" />
      </NavLink>

      <OutlineButton onClick={() => setModalActive(true)}>
        Как это работает
      </OutlineButton>

      <Modal active={modalActive} setActive={setModalActive}>
        <InfoNavbar />
      </Modal>

      <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      </button>

      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>

        <ul className="nav mx-auto">
          <li className="nav-link">
            <NavLink to={`/`} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>Главная</span>
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink to={`/catalog`} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>Путешествия</span>
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