export const SAVE_SETTINGS = 'SAVE_SETTINGS';

const saveSettings = (data) => {
  return { type: SAVE_SETTINGS, data: data };
};

export default saveSettings;
