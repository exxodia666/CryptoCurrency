import axios from 'axios';
import { daily_coins_url } from '../constants/key';
export default (currency, crypto_currency) => axios.get(daily_coins_url(currency, crypto_currency));
