import React from 'react';
import style from './styling/Rocket.module.css';

const Rocket = ({ id, name, description, image }) => {
  return (
    <div className={style.rocket}>
      <div className={style['img-container']}>
        <img src={image} alt={name + 'image'} />
      </div>
      <div className={style['rocket-info']}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button" className={style.btn}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

export default Rocket;
