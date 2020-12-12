import { SAVE_SETTINGS } from "../../actions/settings";
const initialState = {
  currency: 'UAH',
  darkMode: true
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        currency: action.data.currency,
        darkMode: action.data.darkMode
      };
    default:
      return state;
  }
};
