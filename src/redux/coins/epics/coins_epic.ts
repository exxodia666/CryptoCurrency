import { from, of } from 'rxjs';
import { ofType } from "redux-observable";
import { FETCHING_COINS } from "../actions/action_coin_types";
import { catchError, map, mergeMap } from 'rxjs/operators'
import fetch_coins from '../../../utills/fetch_coins';
import { FetchCoinsError, FetchCoinsSuccess } from '../actions/action_coins';
import { SAVE_SETTINGS } from '../../settings/actions/action_settings_types';

export const coins_epic = (action$: any, state$: any) => action$.pipe(
    ofType(FETCHING_COINS, SAVE_SETTINGS),
    mergeMap((action: any) => {
        return from(fetch_coins(state$.value.settings.currency, state$.value.settings.count)).pipe(
            map(response => FetchCoinsSuccess(response.data.Data.map((e: any) => ({
                currency: state$.value.settings.currency,
                key: e.CoinInfo.Id,
                name: e.CoinInfo.FullName,
                symbol: e.CoinInfo.Name,
                url: e.CoinInfo.ImageUrl,
                changeDay: e.RAW[state$.value.settings.currency].CHANGEDAY.toFixed(2),
                changeHour: e.RAW[state$.value.settings.currency].CHANGEHOUR.toFixed(2),
                price: e.RAW[state$.value.settings.currency].PRICE.toFixed(2),
            })))
            ),
            catchError(error => of(FetchCoinsError(error)))
        )
    })
);