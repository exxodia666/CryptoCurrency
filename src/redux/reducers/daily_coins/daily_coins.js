import { FETCH_DAILY_COINS_SUCCESS } from '../../actions/daily_coins';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_COINS_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
};
