import axios from 'axios';
import { coins_url } from '../constants/key';
export default (currency) => axios.get(coins_url(currency));

