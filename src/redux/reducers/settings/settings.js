import { SAVE_SETTINGS } from "../../actions/settings";

const initialState = {
  currency: 'UAH',
  count: 10
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        currency: action.data.currency,
        count: action.data.count
      };
    default:
      return state;
  }
};
