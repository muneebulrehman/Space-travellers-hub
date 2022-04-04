import React from 'react';
import logo from './assets/logo.png';
import { NavLink } from 'react-router-dom';
import style from './styling/navbar.module.css';

const navbar = () => {
  return (
    <nav>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
        <h2>Space Travelers' Hub</h2>
      </div>
      <div className={style.list}>
        <NavLink to="/rockets">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <div className={style.line}></div>
        <NavLink to="/profile">My Profile</NavLink>
      </div>
    </nav>
  );
};

export default navbar;
