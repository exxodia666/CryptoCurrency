import { InitialSettingsType } from './../reducers/settings_reducer';
import {
    SAVE_SETTINGS,
    RESET_SETTINGS,
    ISaveSettings,
    IResetSettings
} from "./action_settings_types";

export const saveSettings = (data: InitialSettingsType): ISaveSettings => ({
    type: SAVE_SETTINGS,
    payload: data //todo types
});

export const resetSettings = (data: InitialSettingsType): IResetSettings => ({
    type: RESET_SETTINGS,
    payload: data //todo types
});

