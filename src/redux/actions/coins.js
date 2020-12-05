export const FETCHING_COINS = 'FETCHING_COINS';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';
import fetch_coins from '../../utills/fetch_coins';

const fetchCoins = (currency) => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COINS });
    try {
      const response = await fetch_coins(currency);
      if (response.data.Response === 'Error') {
        throw new Error(response.data.Message);
      } else {
        console.log('FETCH SUCCESS')
        dispatch({ type: FETCH_COINS_SUCCESS, data: response });
      }
    } catch (e) {
      console.log('FETCH ERROR')
      dispatch({ type: FETCH_COINS_ERROR, data: e });
    }
  };
};
export default fetchCoins;