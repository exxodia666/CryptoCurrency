import axios from 'axios';
import { coins_url } from '../constants/key';
export default (currency: string, count: number) => axios.get(coins_url(currency, count));

