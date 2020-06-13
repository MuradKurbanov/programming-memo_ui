import { TOGGLE_POP, WRAPPER_BACKGROUND } from './actions';

const initialValue = {
  popUp: {
    isOpenPopUp: false,
    childName: '',
  },
  isWrapperBlack: false
};

export const Common = (state = initialValue, action) => {
  switch (action.type) {

    case TOGGLE_POP:
      return {
        ...state,
        popUp: {
          isOpenPopUp: action.boolean,
          childName: action.childName
        }
      };

    case WRAPPER_BACKGROUND:
      return {
        ...state,
        isWrapperBlack: action.boolean
      };

    default:
      return state
  }
};