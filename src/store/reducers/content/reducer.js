import  { GET_THEMES, GET_TECHNOLOGIES_LIST, ACTIVE_THEME } from './actions';

const initialValue = {
  technologyPage: {},
  activeTheme: {},
  technologies: [],
};

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case GET_THEMES:
      return {
        ...state,
        technologyPage: action.technologyPage
      };
    case GET_TECHNOLOGIES_LIST:
      return {
        ...state,
        technologies: action.technologies
      };

    case ACTIVE_THEME:
      return {
        ...state,
        activeTheme: action.activeTheme
      };
    default:
      return state
  }
};