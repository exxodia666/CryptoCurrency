import {
    IResetSettings,
    ISaveSettings,
    RESET_SETTINGS,
    SAVE_SETTINGS
} from './../actions/action_settings_types';

export type InitialSettingsType = {
    currency: string
    count: number
}

const initialState: InitialSettingsType = {
    currency: 'UAH',
    count: 10
};

export const settings_reducer = (state: InitialSettingsType = initialState,
    action: ISaveSettings | IResetSettings): InitialSettingsType => {
    console.log(action)
    switch (action.type) {
        case SAVE_SETTINGS:
            return {
                ...state,
                currency: action.payload.currency,
                count: action.payload.count
            };
        case RESET_SETTINGS:
            return { ...initialState }
        default:
            return state;
    }
};
