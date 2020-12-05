import { combineReducers } from 'redux';
import status from './coins/status';
import coins from './coins/coins';
import settings from './settings/settings';
import daily_coins from './daily_coins/daily_coins';
import daily_coins_status from './daily_coins/daily_coins_status';

export default combineReducers({
  status,
  coins,
  settings,
  daily_coins,
  daily_coins_status
});
