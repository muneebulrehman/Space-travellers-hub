import React from 'react';
import { useSelector } from 'react-redux';
import './styling/MyProfile.css';

function MyProfile() {
  const data = useSelector((state) => state.rockets);
  const list = data.filter((item) => item.reserved === true);
  return (
    <div className="my_profile_container">
      <section className="my_profile_missions">
        <h2>My Missions</h2>
        <ul>
          <li>Telstar</li>
          <li>Ses</li>
          <li>AsiaSat</li>
        </ul>
      </section>
      <section className="my_profile_rockets">
        <h2>My Rockets</h2>
        {list.length !== 0 && (
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default MyProfile;
