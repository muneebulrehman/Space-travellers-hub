const RESERVE = 'spacex/rockets/RESERVE';
const CANCEL = 'spacex/rockets/CANCEL';

const url = 'https://api.spacexdata.com/v3/rockets';

const reserve = (payload) => {
  return {
    type: RESERVE,
    payload
  };
};

const cancel = (payload) => {
  return {
    type: CANCEL,
    payload
  };
};

const initialState = [];
