import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './styling/Rocket.module.css';

const Rocket = ({ id, name, description, image, reserved }) => {
  return (
    <div className={style.rocket}>
      <div className={style['img-container']}>
        <img src={image} alt={name + 'image'} />
      </div>
      <div className={style['rocket-info']}>
        <h3>{name}</h3>
        <p>
          {reserved && <p className={style.reserved}>Reserved</p>}
          {description}
        </p>
        {reserved ? (
          <button type="button" className={style.btn}>
            Reserve Rocket
          </button>
        ) : (
          <button type="button" className={style['btn-cancel']}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
