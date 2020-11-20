import {combineReducers} from 'redux';
import status from './status';
import coins from './coins';

export default combineReducers({
  status,
  coins,
});
