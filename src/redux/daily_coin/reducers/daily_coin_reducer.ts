import { FETCH_DAILY_COINS_SUCCESS } from './../actions/action_daily_types';

const initialState = {};

export const daily_coin_reducer = (state = initialState, action: any) => {
    console.log(action.payload)
    switch (action.type) {
        case FETCH_DAILY_COINS_SUCCESS:
            return { ...action.data };
        default:
            return state;
    }
};

// import { status } from '../../../constants/status';
// import { FETCHING_DAILY_COINS, FETCH_DAILY_COINS_ERROR, FETCH_DAILY_COINS_SUCCESS } from '../../actions/daily_coins';
// const initialState = {
//     status: status.idle,
//     error: {},
// };
// export default (state = initialState, action) => {
//     switch (action.type) {
//         case FETCHING_DAILY_COINS:
//             return { status: status.fetching };
//         case FETCH_DAILY_COINS_SUCCESS:
//             return { status: status.success };
//         case FETCH_DAILY_COINS_ERROR:
//             return { ...state, status: status.error, error: action.data };
//         default:
//             return state;
//     }
// };
