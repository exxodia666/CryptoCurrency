import axios from 'axios';
import {apikey, key, url} from '../constants/key';
export default () => axios.get(`${url}${apikey}{${key}}`);
