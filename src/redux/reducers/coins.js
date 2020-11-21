import {FETCHING_COINS, FETCH_COINS_SUCCESS} from '../actions/coins';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS_SUCCESS:
      return {...action.data};
    default:
      return state;
  }
};
