import { TOGGLE_POP, WRAPPER_BACKGROUND } from './actions';

const initialValue = {
  popUp: {
    isOpenPopUp: false,
    childName: '',
  },
  isContainerBlack: false
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
        isContainerBlack: action.boolean
      };

    default:
      return state
  }
};