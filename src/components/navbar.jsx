import React from 'react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import style from './styling/navbar.module.css';

const navbar = () => {
  return (
    <nav>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
        <h2>Space Travelers' Hub</h2>
      </div>
      <div className={style.list}>
        <Link to="/rockets">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <div className={style.line}></div>
        <Link to="/profile">My Profile</Link>
      </div>
    </nav>
  );
};

export default navbar;
