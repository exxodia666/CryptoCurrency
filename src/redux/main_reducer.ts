import { combineReducers } from 'redux';
import { coins_reducer } from './coins/reducers/coins';
import { daily_coin_reducer } from './daily_coin/reducers/daily_coin_reducer';
import { settings_reducer } from './settings/reducers/settings_reducer';
export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
    settings: settings_reducer,
    coins: coins_reducer,
    daily_coins: daily_coin_reducer
});