import { FETCH_WEATHER_ERROR } from '../actions/';
const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_WEATHER_ERROR:
      return action.error;
    default:
      return null;
  }
};

export default error;
