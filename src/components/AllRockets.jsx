import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import style from './styling/AllRockets.module.css';

const AllRockets = () => {
  const data = useSelector((rocketReducer) => rocketReducer);
  return <div className={style.rockets}></div>;
};

export default AllRockets;
