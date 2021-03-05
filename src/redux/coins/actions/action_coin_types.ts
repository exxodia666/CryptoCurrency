export const FETCHING_COINS = 'COINS/FETCHING_COINS';
export const FETCH_COINS_SUCCESS = 'COINS/FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'COINS/FETCH_COINS_ERROR';


export type coinData = {
    currency: string
    key: string
    name: string
    symbol: string
    url: string
    changeDay: number
    changeHour: number
    price: number
}

export interface IFetchCoins {
    type: typeof FETCHING_COINS,
    //payload: any //todo types
};
export interface IFetchCoinsSuccess {
    type: typeof FETCH_COINS_SUCCESS
    payload: coinData[] //todo types
};
export interface IFetchCoinsError {
    type: typeof FETCH_COINS_ERROR
    payload: any //todo types
};