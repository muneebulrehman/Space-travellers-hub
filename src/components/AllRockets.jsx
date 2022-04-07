import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import style from './styling/AllRockets.module.css';

const AllRockets = () => {
  const data = useSelector((state) => state.rockets);
  if (data.length < 1) return <h2 className={style.loading}>loading...</h2>;
  return (
    <div className={style.rockets}>
      {data.map((rocket) => (
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        <Rocket key={rocket.id} {...rocket} />
      ))}
    </div>
  );
};

export default AllRockets;
