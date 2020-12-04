import axios from 'axios';
import {apikey, key, url} from '../constants/key';
//TODO multiple currency
export default (currency) => axios.get(`${url}${currency}${apikey}{${key}}`);
