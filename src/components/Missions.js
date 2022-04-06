import React,{useEffect} from 'react'
import {getMissions} from '../redux/missions/missions'
import { useDispatch, useSelector } from 'react-redux';

const missionApiUrl='https://api.spacexdata.com/v3/missions';
function Missions() {
  const missions = useSelector((state)=>state.missions)  
  const dispatch = useDispatch()
  console.log(missions)
  useEffect(() => {
     dispatch(getMissions())
  }, [])
  
  return 
      (
          <div>hallo missions</div>
      )
}

export default Missions