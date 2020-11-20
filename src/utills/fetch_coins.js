import axios from 'axios';
import {apikey, key, url} from '../constants/key';
//TODO multiple currency
export default () => axios.get(`${url}${apikey}{${key}}`);
