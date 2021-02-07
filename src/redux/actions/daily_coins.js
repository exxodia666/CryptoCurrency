export const FETCHING_DAILY_COINS = 'FETCHING_DAILY_COINS';
export const FETCH_DAILY_COINS_SUCCESS = 'FETCH_DAILY_COINS_SUCCESS';
export const FETCH_DAILY_COINS_ERROR = 'FETCH_DAILY_COINS_ERROR';

import fetch_daily_coins from '../../utills/fetch_daily_coins';

const fetchDailyCoins = (crypto_currency, currency) => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_DAILY_COINS });
    try {
      const response = await fetch_daily_coins(crypto_currency, currency);
      if (response.data.Response === 'Error') {
        throw new Error(response.data.Message);
      } else {
        dispatch({ type: FETCH_DAILY_COINS_SUCCESS, data: response });
      }
    } catch (e) {
      dispatch({ type: FETCH_DAILY_COINS_ERROR, data: e });
    }
  };
};
export default fetchDailyCoins;