const initialValue = [];

export const Content = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
      ];
    default:
      return state
  }
};