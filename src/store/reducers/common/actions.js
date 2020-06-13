export const TOGGLE_POP = 'TOGGLE_POP';
export const WRAPPER_BACKGROUND = 'WRAPPER_BACKGROUND';

export const togglePopup = (boolean, childName) => ({
  type: 'TOGGLE_POP',
  boolean,
  childName
});

export const wrapperBackground = (boolean) => ({
  type: 'WRAPPER_BACKGROUND',
  boolean
});