export const GET_THEMES = 'GET_THEMES';
export const GET_TECHNOLOGIES_LIST = 'GET_TECHNOLOGIES_LIST';
export const ACTIVE_THEME = 'ACTIVE_THEME';

export const generateTechnologyPage = (technologyPage) => ({
  type: 'GET_THEMES',
  technologyPage
});

export const getTechnologiesAction = (technologies) => ({
  type: 'GET_TECHNOLOGIES_LIST',
  technologies
});

export const activeTheme = (activeTheme) => ({
  type: 'ACTIVE_THEME',
  activeTheme
});



