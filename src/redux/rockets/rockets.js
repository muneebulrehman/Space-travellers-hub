const RESERVE = 'spacex/rockets/RESERVE';
const CANCEL = 'spacex/rockets/CANCEL';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

const addRockets = (payload) => {
  return {
    type: 'ADD_ROCKETS',
    payload
  };
};

export const reserve = (payload) => {
  return {
    type: RESERVE,
    payload
  };
};

export const cancel = (payload) => {
  return {
    type: CANCEL,
    payload
  };
};

export const fetchData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((el) => {
    dispatch(
      addRockets({
        id: el.id,
        name: el.rocket_name,
        description: el.description,
        image: el.flickr_images[0],
        reserved: false
      })
    );
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE: {
      return [...state, action.payload];
    }
    case CANCEL: {
      return [...state, action.payload];
    }
    case 'ADD_ROCKETS': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
