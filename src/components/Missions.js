import React from 'react';
import { useSelector } from 'react-redux';

function Missions() {
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  return (
    <div>hallo missions</div>
  );
}

export default Missions;
