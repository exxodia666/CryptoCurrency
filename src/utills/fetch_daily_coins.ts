import axios from 'axios';
import { daily_coins_url } from '../constants/key';
export default (currency: string, crypto_currency: string) => axios.get(daily_coins_url(currency, crypto_currency));
