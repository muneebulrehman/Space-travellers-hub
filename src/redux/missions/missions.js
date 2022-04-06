//import BookStoreService from '../../api/apiServices';
const missionApiUrl='https://api.spacexdata.com/v3/missions';
export const missionsInitialState = [];
const SET_MISSIONS = 'SPACE-TRAVELLERS-HUB/missions/SET_MISSIONS';
const ADD_MISSION = 'SPACE-TRAVELLERS-HUB/missions/ADD_MISSION';
const REMOVE_MISSION = 'SPACE-TRAVELLERS-HUB/missions/REMOVE_MISSION';

export const missionsReducer = (state = missionsInitialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return action.missions;
    case ADD_MISSION:
      return [...state, action.mission];
    case REMOVE_MISSION:
      return [...state].filter((mission) => mission.item_id !== action.id);
    default:
      return state;
  }
};

export function setMissions(missions) {
  return { type: SET_MISSIONS, missions };
}

// export const addMission = (mission) => async (dispatch) => {
//    const response = await fetch(book);
//   dispatch({ type: ADD_BOOK, book });
// };

// export const removeBook = (id) => async (dispatch) => {
//   await BookStoreService.apiRemoveBook(id);
//   dispatch({ type: REMOVE_BOOK, id });
// };
