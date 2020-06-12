export const TOGGLE_POP = 'TOGGLE_POP';

export const togglePopup = (boolean, childName) => ({
  type: 'TOGGLE_POP',
  boolean,
  childName
});