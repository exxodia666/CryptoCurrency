export const FETCHING_COINS = 'FETCHING_COINS';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';
import fetch_coins from '../../utills/fetch_coins';

const fetchCoins = (currency, count) => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COINS });
    try {
      const response = await fetch_coins(currency, count);
      if (response.data.Response === 'Error') {
        throw new Error(response.data.Message);
      } else {
        dispatch({ type: FETCH_COINS_SUCCESS, data: response });
      }
    } catch (e) {
      dispatch({ type: FETCH_COINS_ERROR, data: e });
    }
  };
};
export default fetchCoins;