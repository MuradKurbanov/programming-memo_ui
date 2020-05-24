export const SAVE_THEME = 'SAVE_THEME';

export const saveTheme = (theme) => {
  return {
    type: 'SAVE_THEME',
    theme
  };
};