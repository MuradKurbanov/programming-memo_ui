export const GET_THEMES_SUCCESS = 'GET_THEMES_SUCCESS';
export const OPEN_THEME_DATA = 'OPEN_THEME_DATA';
export const DELETE_THEME_SUCCESS = 'DELETE_THEME_SUCCESS';
export const UPDATE_THEME_SUCCESS = 'UPDATE_THEME_SUCCESS';
export const ADD_THEME_SUCCESS = 'ADD_THEME_SUCCESS';

export const GET_TECHNOLOGIES_LIST = 'GET_TECHNOLOGIES_LIST';
export const ADD_TECHNOLOGIES_SUCCESS = 'ADD_TECHNOLOGIES_SUCCESS';
export const UPDATE_TECHNOLOGIES_SUCCESS = 'UPDATE_TECHNOLOGIES_SUCCESS';
export const DELETE_TECHNOLOGY_SUCCESS = 'DELETE_TECHNOLOGY_SUCCESS';

export const openDataTheme = (theme) => ({
  type: 'OPEN_THEME_DATA',
  theme
});

export const addThemeSuccess = () => ({
  type: 'ADD_THEME_SUCCESS'
});

export const getThemesSuccess = (activeTechnology) => ({
  type: 'GET_THEMES_SUCCESS',
  activeTechnology
});

export const removeThemeSuccess = () => ({
  type: 'DELETE_THEME_SUCCESS'
});

export const updateThemeSuccess = () => ({
  type: 'UPDATE_THEME_SUCCESS'
});


export const addTechnologies = () => ({
  type: 'ADD_TECHNOLOGIES_SUCCESS',
});

export const getTechnologiesAction = (technologies) => ({
  type: 'GET_TECHNOLOGIES_LIST',
  technologies
});

export const updateTechnologySuccess = () => ({
  type: 'UPDATE_TECHNOLOGIES_SUCCESS'
});

export const deleteTechnologySuccess = () => ({
  type: 'DELETE_TECHNOLOGY_SUCCESS'
});
