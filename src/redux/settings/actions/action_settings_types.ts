import { InitialSettingsType } from "../reducers/settings_reducer";

export const SAVE_SETTINGS = 'SETTINGS/SAVE_SETTINGS';
export const RESET_SETTINGS = 'SETTINGS/RESET_SETTINGS';

export interface ISaveSettings {
    type: typeof SAVE_SETTINGS,
    payload: InitialSettingsType //todo types
};
export interface IResetSettings {
    type: typeof RESET_SETTINGS
    payload: InitialSettingsType //todo types
};

