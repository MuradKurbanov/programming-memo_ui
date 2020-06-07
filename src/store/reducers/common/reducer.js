import { TOGGLE_POP } from './actions';

const initialValue = {
  isOpenPopUp: false,
  childName: '',
};

export const Common = (state = initialValue, action) => {
  switch (action.type) {
    case TOGGLE_POP:
      return {
        ...state,
        isOpenPopUp: action.boolean,
        childName: action.childName
      };
    default:
      return state
  }
};