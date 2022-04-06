import React from 'react';
import { useSelector } from 'react-redux';
import './styling/MyProfile.css';

function MyProfile() {
  const data = useSelector((state) => state.rockets);
  const list = data.filter((item) => item.reserved === true);
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((item) => item.joined === true);
  return (
    <div className="my_profile_container">
      <section className="my_profile_missions">
        <h2>My Missions</h2>
        {myMissions.length !== 0 ? (
          <ul>
            {
            myMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          }
          </ul>
        ) : 'You didn\'t join any mission yet!'}
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
