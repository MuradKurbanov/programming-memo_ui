import  { SAVE_THEME } from './actions';

const initialValue = {};

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case SAVE_THEME:
      return {
        ...state,
        action
      };
    default:
      return state
  }
};