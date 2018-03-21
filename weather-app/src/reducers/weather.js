import { FETCH_WEATHER } from '../actions/';
const weather = (state = [], action) => {
  // checking if duplicate city exists
  if (
    state.filter(({ city }) => city.name === action.response.data.city.name)
      .length > 0
  )
    return state;

  switch (action.type) {
    case FETCH_WEATHER:
      return [action.response.data, ...state];
    default:
      return state;
  }
};

export default weather;
