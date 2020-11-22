import {combineReducers} from 'redux';
import status from './status';
import coins from './coins';
import settings from './settings';
export default combineReducers({
  status,
  coins,
  settings,
});
