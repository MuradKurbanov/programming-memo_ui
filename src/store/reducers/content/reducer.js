import  {
  GET_THEMES_BY_ID_TECHNOLOGY, GET_TECHNOLOGIES_LIST,
  OPEN_THEME_DATA, REMOVE_THEME_SUCCESS,
  UPDATE_THEME_SUCCESS, ADD_THEME_SUCCESS
} from './actions';

const initialValue = {
  technologyPage: {},
  dataTheme: {},
  technologies: [],
};

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case GET_TECHNOLOGIES_LIST:
      return {
        ...state,
        technologies: action.technologies
      };

    case OPEN_THEME_DATA:
      return {
        ...state,
        dataTheme: action.dataTheme
      };

    case REMOVE_THEME_SUCCESS:
      return {
        ...state
      };

    case UPDATE_THEME_SUCCESS:
      return {
        ...state
      };

    case GET_THEMES_BY_ID_TECHNOLOGY:
      return {
        ...state,
        technologyPage: action.technologyPage
      };

    case ADD_THEME_SUCCESS:
      return {
        ...state
      };
    default:
      return state
  }
};