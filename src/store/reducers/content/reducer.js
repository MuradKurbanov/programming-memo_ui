import  { SAVE_THEME } from './actions';

const initialValue = {
  content: {}
};

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case SAVE_THEME:
      return {
        ...state,
        content: action.content
      };
    default:
      return state
  }
};