import  { SAVE_THEME, GET_TECHNOLOGIES_LIST } from './actions';

const initialValue = {
  content: {},
};

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case SAVE_THEME:
      return {
        ...state,
        content: action.content
      };
    case GET_TECHNOLOGIES_LIST:
      return {
        ...state,
        technologyList: action.technologyList
      };
    default:
      return state
  }
};