import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const missionApiUrl='https://api.spacexdata.com/v3/missions';
function Missions() {
  const missions = useSelector((state)=>state.missions)  
  const dispatch = useDispatch()
  console.log(missions)
  
  return 
      (
          <div>hallo missions</div>
      )
}

export default Missions