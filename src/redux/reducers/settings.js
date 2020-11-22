import {SAVE_SETTINGS} from '../actions/settings';

const initialState = {
  currency: 'UAH',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {...state, currency: action.data};
    default:
      return state;
  }
};
