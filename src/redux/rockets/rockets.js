const RESERVE = 'spacex/rockets/RESERVE';
const CANCEL = 'spacex/rockets/CANCEL';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

const addRockets = (payload) => ({
  type: 'ADD_ROCKETS',
  payload
});

export const reserve = (payload) => ({
  type: RESERVE,
  payload
});

export const cancel = (payload) => ({
  type: CANCEL,
  payload
});

export const fetchData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const array = data.map((el) => {
    return {
      id: el.id,
      name: el.rocket_name,
      description: el.description,
      image: el.flickr_images[0],
      reserved: false
    };
  });
  dispatch(addRockets(array));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE: {
      return state.map((el) => {
        if (el.id === action.payload) el.reserved = true;
        return el;
      });
    }
    case CANCEL: {
      return state.map((el) => {
        if (el.id === action.payload) el.reserved = false;
        return el;
      });
    }
    case 'ADD_ROCKETS': {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
