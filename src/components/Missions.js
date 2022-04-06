import React,{useEffect} from 'react'

const missionApiUrl='https://api.spacexdata.com/v3/missions';
function Missions() {
  useEffect(async() => {
    const fetchMissions=async()=>{
        const response = await fetch(missionApiUrl);
        const data=response.json();
        console.log(data)
    }
    await fetchMissions(); 
  }, []);

  return 
      (
          <div>hallo missions</div>
      )
}

export default Missions