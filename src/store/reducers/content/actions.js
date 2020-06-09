export const GET_THEMES_BY_ID_TECHNOLOGY = 'GET_THEMES_BY_ID_TECHNOLOGY';
export const GET_TECHNOLOGIES_LIST = 'GET_TECHNOLOGIES_LIST';
export const OPEN_THEME_DATA = 'OPEN_THEME_DATA';
export const REMOVE_THEME_SUCCESS = 'REMOVE_THEME_SUCCESS';
export const UPDATE_THEME_SUCCESS = 'UPDATE_THEME_SUCCESS';
export const ADD_THEME_SUCCESS = 'ADD_THEME_SUCCESS';

export const generateTechnologyPage = (technologyPage) => ({
  type: 'GET_THEMES_BY_ID_TECHNOLOGY',
  technologyPage
});

export const getTechnologiesAction = (technologies) => ({
  type: 'GET_TECHNOLOGIES_LIST',
  technologies
});

export const dataThemeAction = (dataTheme) => ({
  type: 'OPEN_THEME_DATA',
  dataTheme
});

export const removeThemeActionSuccess = () => ({
  type: 'REMOVE_THEME_SUCCESS'
});

export const updateThemeActionSuccess = () => ({
  type: 'UPDATE_THEME_SUCCESS'
});

export const addThemeActionSuccess = () => ({
  type: 'ADD_THEME_SUCCESS'
});




