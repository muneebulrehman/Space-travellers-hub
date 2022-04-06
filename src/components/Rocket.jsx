import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './styling/Rocket.module.css';
import { reserve, cancel } from '../redux/rockets/rockets';

const Rocket = ({ id, name, description, image, reserved }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.rocket}>
      <div className={style['img-container']}>
        <img src={image} alt={name + 'image'} />
      </div>
      <div className={style['rocket-info']}>
        <h3>{name}</h3>
        <p>
          {reserved && <span className={style.reserved}>Reserved</span>}
          {description}
        </p>
        {!reserved ? (
          <button type="button" className={style.btn} onClick={() => dispatch(reserve(id))}>
            Reserve Rocket
          </button>
        ) : (
          <button
            type="button"
            className={style['btn_cancel']}
            onClick={() => dispatch(cancel(id))}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
