import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';
import style from './styling/navbar.module.css';

const navbar = () => (
  <nav>
    <div className={style.logo}>
      <img src={logo} alt="logo" />
      <h2>Space Travelers&apos; Hub</h2>
    </div>
    <div className={style.list}>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <div className={style.line} />
      <NavLink to="/profile">My Profile</NavLink>
    </div>
  </nav>
);

export default navbar;
