import { status } from '../../constants/status';
import {
  FETCHING_COINS,
  FETCH_COINS_ERROR,
  FETCH_COINS_SUCCESS,
} from '../actions/coins';

const initialState = {
  status: status.idle
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COINS:
      return {status: status.fetching};
    case FETCH_COINS_SUCCESS:
      return {status: status.success};
    case FETCH_COINS_ERROR:
      return {status: status.error};
    default:
      return state;
  }
};
