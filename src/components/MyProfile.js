import React from 'react';
import './styling/MyProfile.css';

function MyProfile() {
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
        <ul>
          <li>Falcon9</li>
          <li>Falcon Heavy</li>
          <li>Starship</li>
        </ul>
      </section>
    </div>
  );
}

export default MyProfile;
