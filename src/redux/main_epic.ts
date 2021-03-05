import { combineEpics } from 'redux-observable';
import { coins_epic } from './coins/epics/coins_epic';
import { daily_coin_epic } from './daily_coin/epics/daily_coin_epic';


export const rootEpic = combineEpics(coins_epic, daily_coin_epic);
