import axios from 'axios';
import { search_url } from '../constants/key';
export default (currency, crypto_currency) => axios.get(search_url(currency, crypto_currency));

