import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import style from './styling/AllRockets.module.css';

const AllRockets = () => {
  const data = useSelector((state) => state.rockets);
  console.log('all rockets>>>',data)
  return (
    <div className={style.rockets}>
      {data.map((rocket) => {
        return <Rocket key={rocket.id} {...rocket} />;
      })}
    </div>
  );
};

export default AllRockets;
