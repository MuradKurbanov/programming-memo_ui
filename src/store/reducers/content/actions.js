export const SAVE_THEME = 'SAVE_THEME';
export const GET_TECHNOLOGIES_LIST = 'GET_TECHNOLOGIES_LIST';

export const saveTheme = (content) => ({
  type: 'SAVE_THEME',
  content
});

export const getTechnologiesListAction = (technologyList) => ({
  type: 'GET_TECHNOLOGIES_LIST',
  technologyList
});