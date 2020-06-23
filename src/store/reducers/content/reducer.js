import  {
  GET_THEMES_SUCCESS, GET_TECHNOLOGIES_LIST,
  OPEN_THEME_DATA, DELETE_THEME_SUCCESS,
  UPDATE_THEME_SUCCESS, ADD_THEME_SUCCESS,
  UPDATE_TECHNOLOGIES_SUCCESS, DELETE_TECHNOLOGY_SUCCESS,
  ADD_TECHNOLOGIES_SUCCESS
} from './actions';

const initialValue = {
  technologyPage: {
    activeTheme: {},
    technology: {}
  },
  technologies: [],
};

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case GET_TECHNOLOGIES_LIST:
      return {
        ...state,
        technologies: action.technologies
      };

    case ADD_TECHNOLOGIES_SUCCESS:
      return {
        ...state,
      };

    case UPDATE_TECHNOLOGIES_SUCCESS:
      return {
        ...state
      };

    case DELETE_TECHNOLOGY_SUCCESS:
      return {
        ...state
      };

    case OPEN_THEME_DATA:
      return {
        ...state,
        technologyPage: {
          ...state.technologyPage,
          activeTheme: action.theme
        }
      };

    case DELETE_THEME_SUCCESS:
      return {
        ...state,
        technologyPage: {
          ...state.technologyPage,
          activeTheme: {}
        }
      };

    case UPDATE_THEME_SUCCESS:
      return {
        ...state,
        technologyPage: {
          ...state.technologyPage,
          activeTheme: {}
        }
      };

    case GET_THEMES_SUCCESS:
      return {
        ...state,
        technologyPage: {
          ...state.technologyPage,
          technology: action.technology
        }
      };

    case ADD_THEME_SUCCESS:
      return {
        ...state
      };

    default:
      return state
  }
};
