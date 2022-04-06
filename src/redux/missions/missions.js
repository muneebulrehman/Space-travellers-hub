// import BookStoreService from '../../api/apiServices';
const missionApiUrl = 'https://api.spacexdata.com/v3/missions';
export const missionsInitialState = [];
const SET_MISSIONS = 'SPACE-TRAVELLERS-HUB/missions/SET_MISSIONS';
const JOIN_LEAVE = 'SPACE-TRAVELLERS-HUB/missions/JOIN_LEAVE';

export const missionsReducer = (state = missionsInitialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return action.missions;
    case JOIN_LEAVE:
      return [...state].map((mission) => {
        if (mission.mission_id !== action.data.id) {
          return { ...mission };
        }
        return { ...mission, joined: action.data.joinOrLeave };
      });
    default:
      return state;
  }
};

export function setMissions(missions) {
  return { type: SET_MISSIONS, missions };
}

const reformulateData = (data) => {
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    joined: false
  }));
  return missions;
};

export const getMissions = () => async (dispatch) => {
  const response = await fetch(missionApiUrl);
  const data = await response.json();
  dispatch(setMissions(reformulateData(data)));
};

export const joinLeaveMission = (data) => ({ type: JOIN_LEAVE, data });
