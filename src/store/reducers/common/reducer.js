import { TOGGLE_POP } from './actions';

const initialValue = {
  isOpenPopUp: false,
};

export const Common = (state = initialValue, action) => {
  switch (action.type) {
    case TOGGLE_POP:
      return {
        ...state,
        isOpenPopUp: !state.isOpenPopUp
      };
    default:
      return state
  }
};