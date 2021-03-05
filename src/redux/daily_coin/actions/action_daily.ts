import {
    FETCHING_DAILY_COINS,
    FETCH_DAILY_COINS_SUCCESS,
    FETCH_DAILY_COINS_ERROR,
    IFetchDailyCoins,
    IFetchDailyCoinsSuccess,
    IFetchDailyCoinsError
} from "./action_daily_types";

export const FetchDailyCoins = (data: any): IFetchDailyCoins => ({
    type: FETCHING_DAILY_COINS,
    payload: data //todo types
});
export const FetchDailyCoinsSuccess = (data: any): IFetchDailyCoinsSuccess => ({
    type: FETCH_DAILY_COINS_SUCCESS,
    payload: data //todo types
});
export const FetchDailyCoinsError = (data: any): IFetchDailyCoinsError => ({
    type: FETCH_DAILY_COINS_ERROR,
    payload: data //todo types
});

