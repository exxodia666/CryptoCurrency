import {
    FETCHING_COINS,
    FETCH_COINS_ERROR,
    FETCH_COINS_SUCCESS,
    IFetchCoins,
    IFetchCoinsError,
    IFetchCoinsSuccess
} from "./action_coin_types";

export const FetchCoins = (): IFetchCoins => ({
    type: FETCHING_COINS,
    //payload: data //todo types
});

export const FetchCoinsSuccess = (data: any): IFetchCoinsSuccess => ({
    type: FETCH_COINS_SUCCESS,
    payload: data //todo types
});

export const FetchCoinsError = (data: any): IFetchCoinsError => ({
    type: FETCH_COINS_ERROR,
    payload: data //todo types
});