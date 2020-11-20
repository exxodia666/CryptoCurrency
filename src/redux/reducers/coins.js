import {FETCHING_COINS, FETCH_COINS_SUCCESS} from '../actions/coins';

const initialState = {};

export default (state = initialState, action) => {
  //console.log('action', action);
  switch (action.type) {
    case FETCH_COINS_SUCCESS:
      return {...action.data};
    case FETCH_COINS_SUCCESS:
      return {...action.data};
    default:
      return state;
  }
};
