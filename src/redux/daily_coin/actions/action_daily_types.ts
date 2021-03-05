export const FETCHING_DAILY_COINS = 'FETCHING_DAILY_COINS';
export const FETCH_DAILY_COINS_SUCCESS = 'FETCH_DAILY_COINS_SUCCESS';
export const FETCH_DAILY_COINS_ERROR = 'FETCH_DAILY_COINS_ERROR';

export interface IFetchDailyCoins {
    type: typeof FETCHING_DAILY_COINS,
    payload: any //todo types
};
export interface IFetchDailyCoinsSuccess {
    type: typeof FETCH_DAILY_COINS_SUCCESS
    payload: any //todo types
};
export interface IFetchDailyCoinsError {
    type: typeof FETCH_DAILY_COINS_ERROR
    payload: any //todo types
};

