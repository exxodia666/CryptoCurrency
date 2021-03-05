import { FetchDailyCoinsSuccess } from './../actions/action_daily';
import { from, of } from 'rxjs';
import { ofType } from "redux-observable";
// import { FETCHING_COINS } from "../actions/action_coin_types";
import { catchError, map, mergeMap } from 'rxjs/operators'
// import fetch_coins from '../../../utills/fetch_coins';
// import { FetchCoinsError, FetchCoinsSuccess } from '../actions/action_coins';
import Axios from 'axios';
// import { SAVE_SETTINGS } from '../../settings/actions/action_settings_types';
import { FETCHING_DAILY_COINS } from '../actions/action_daily_types';
import { FetchDailyCoinsError } from '../actions/action_daily';
import fetch_daily_coins from '../../../utills/fetch_daily_coins'
export const daily_coin_epic = (action$: any, state$: any) => action$.pipe(
    ofType(FETCHING_DAILY_COINS),
    mergeMap((action: any) => {
        //fetch_daily_coins(crypto_currency, currency);
        return from(fetch_daily_coins(action.payload, state$.value.settings.currency)).pipe(
            map(response => FetchDailyCoinsSuccess(response)),
            catchError(error => of(FetchDailyCoinsError(error)))
        )
    })
);


// FetchCoinsSuccess(response.data.Data.map((e: any) => ({
//     currency: state$.value.settings.currency,
//     key: e.CoinInfo.Id,
//     name: e.CoinInfo.FullName,
//     symbol: e.CoinInfo.Name,
//     url: e.CoinInfo.ImageUrl,
//     changeDay: e.RAW[state$.value.settings.currency].CHANGEDAY.toFixed(2),
//     changeHour: e.RAW[state$.value.settings.currency].CHANGEHOUR.toFixed(2),
//     price: e.RAW[state$.value.settings.currency].PRICE.toFixed(2),
// })))

       // const data = response.data.Data.map((e: any) => ({
                //     currency: state$.value.settings.currency,
                //     key: e.CoinInfo.Id,
                //     name: e.CoinInfo.FullName,
                //     symbol: e.CoinInfo.Name,
                //     url: e.CoinInfo.ImageUrl,
                //     changeDay: e.RAW[state$.value.settings.currency].CHANGEDAY.toFixed(2),
                //     changeHour: e.RAW[state$.value.settings.currency].CHANGEHOUR.toFixed(2),
                //     price: e.RAW[state$.value.settings.currency].PRICE.toFixed(2),
                // }))

//       fetch_coins(state$.value.settings.currency, state$.value.settings.count)
//       currency={currency}
//       navigation={navigation.navigate}
//       key={item.CoinInfo.Id}
//       name={item.CoinInfo.FullName}
//       symbol={item.CoinInfo.Name}
//       url={item.CoinInfo.ImageUrl}
//       changeDay={item.RAW[currency].CHANGEDAY.toFixed(2)}
//       changeHour={item.RAW[currency].CHANGEHOUR.toFixed(2)}
//       price={item.RAW[currency].PRICE.toFixed(2)}
// {
//     "CoinInfo": {
//         "Algorithm": "SHA-256",
//         "AssetLaunchDate": "2009-01-03",
//         "BlockNumber": 669543,
//         "BlockReward": 6.25,
//          "BlockTime": 549.0258,
//                             "DocumentType": "Webpagecoinp",
//                                 "FullName": "Bitcoin",
//                                     "Id": "1182",
//                                         "ImageUrl": "/media/19633/btc.png",
//                                             "Internal": "BTC",
//                                                 "MaxSupply": 20999999.9769,
//                                                     "Name": "BTC",
//                                                         "NetHashesPerSecond": 167381872115.46988,
//                                                             "ProofType": "PoW",
//                                                                 "Rating": [Object],
//                                                                     "Type": 1,
//                                                                         "Url": "/coins/btc/overview"
//     },
//     "DISPLAY": {
//         "UAH": [Object]
//     },
//     "RAW": {
//         "UAH": [Object]
//     }
// }


// { "__notifier": {
//     "_isScalar": false, 
//     "closed": false, 
//     "hasError": false, 
//     "isStopped": false, 
//     "observers": [], 
//     "thrownError": null 
// }, 
// "__subscription": { 
//     "_parentOrParents": null, 
//     "_subscriptions": [[ObserveOnSubscriber]], 
//     "closed": false, 
//     "destination": { 
//         "_complete": undefined, 
//         "_context": [Circular], 
//         "_error": undefined, 
//         "_next": [Function anonymous], 
//         "_parentOrParents": null, 
//         "_parentSubscriber": [Circular], 
//         "_subscriptions": null, 
//         "closed": false, 
//         "destination": [Object], 
//         "isStopped": false, 
//         "syncErrorThrowable": false, 
//         "syncErrorThrown": false, 
//         "syncErrorValue": null }, 
//         "isStopped": false, 
//         "syncErrorThrowable": true, 
//         "syncErrorThrown": false, 
//         "syncErrorValue": null 
//     }, 
//         "_isScalar": false, 
//         "_subscribe": [Function anonymous], 
//         "value": { "
//         _persist": { 
//             "rehydrated": true, "version": -1 }, "settings": { "count": 20, "currency": "UAH" } } }
// const fetchCoins = (currency, count) => {
//   return async (dispatch) => {
//     dispatch({ type: FETCHING_COINS });
//     try {
//       const response = await fetch_coins(currency, count);
//       if (response.data.Response === 'Error') {
//         throw new Error(response.data.Message);
//       } else {
//         dispatch({ type: FETCH_COINS_SUCCESS, data: response });
//       }
//     } catch (e) {
//       dispatch({ type: FETCH_COINS_ERROR, data: e });
//     }
//   };
// };
// export default fetchCoins;

// import fetch_daily_coins from '../../utills/fetch_daily_coins';

// const fetchDailyCoins = (crypto_currency, currency) => {
//   return async (dispatch) => {
//     dispatch({ type: FETCHING_DAILY_COINS });
//     try {
//       const response = await fetch_daily_coins(crypto_currency, currency);
//       if (response.data.Response === 'Error') {
//         throw new Error(response.data.Message);
//       } else {
//         dispatch({ type: FETCH_DAILY_COINS_SUCCESS, data: response });
//       }
//     } catch (e) {
//       dispatch({ type: FETCH_DAILY_COINS_ERROR, data: e });
//     }
//   };
// };
// export default fetchDailyCoins;