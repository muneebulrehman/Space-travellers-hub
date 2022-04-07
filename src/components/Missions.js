import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styling/Missions.css';
import { joinLeaveMission } from '../redux/missions/missions';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const handleClick = (id, join) => {
    dispatch(joinLeaveMission({ id, joinOrLeave: join }));
  };
  return (
    <div className="missions_container">
      <table>
        <tr id="missions_header">
          <th className="mission_column">Mission</th>
          <th className="desc_column">description</th>
          <th className="status_column">Status</th>
          <th className="join_column">Join</th>
        </tr>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission_columns">{mission.mission_name}</td>
              <td className="description">{mission.description}</td>
              <td className="mission_status">{mission.joined ? (<span className="active_member">Active Member</span>) : (<span className="not_member">Not a Member</span>)}</td>
              <td className="join_mission">
                {mission.joined
                  ? (<button type="button" className="mission_leave" onClick={() => handleClick(mission.mission_id, false)}>Leave mission</button>)
                  : (<button type="button" className="mission_join" onClick={() => handleClick(mission.mission_id, true)}>Join Mission</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
