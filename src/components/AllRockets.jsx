import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import style from './styling/AllRockets.module.css';

const AllRockets = () => {
  const data = useSelector((rocketReducer) => rocketReducer);
  if (data.length < 1) return <h2 className={style.loading}>loading...</h2>;
  console.log('rocket');
  return (
    <div className={style.rockets}>
      {data.map((rocket) => {
        return <Rocket key={rocket.id} {...rocket} />;
      })}
    </div>
  );
};

export default AllRockets;
