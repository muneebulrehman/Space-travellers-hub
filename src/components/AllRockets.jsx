import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import style from './styling/AllRockets.module.css';

const AllRockets = () => {
  const data = useSelector((rocketReducer) => rocketReducer);
  return (
    <div className={style.rockets}>
      {data.map((rocket) => {
        return <Rocket key={rocket.id} {...rocket} />;
      })}
    </div>
  );
};

export default AllRockets;
