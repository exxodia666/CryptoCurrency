import { coinData } from './../actions/action_coin_types';
import { status } from './../../../constants/status';
import {
  FETCHING_COINS,
  FETCH_COINS_ERROR,
  FETCH_COINS_SUCCESS,
  IFetchCoins,
  IFetchCoinsError,
  IFetchCoinsSuccess
} from "../actions/action_coin_types";

export type CoinType = {
  error: string
  status: status
  data: coinData[]
}

const initialState: CoinType = {
  error: '',
  status: status.idle,
  data: []
};

export const coins_reducer = (state: CoinType = initialState, action: IFetchCoins | IFetchCoinsError | IFetchCoinsSuccess) => {
  switch (action.type) {
    case FETCHING_COINS:
      return {
        ...state,
        status: status.fetching
      }
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: status.success
      };
    case FETCH_COINS_ERROR:
      return {
        ...state,
        error: action.payload.toString(),
        status: status.error
      };
    default:
      return state;
  }
};