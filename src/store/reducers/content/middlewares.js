import {
  getThemesApi, getTechnologiesApi,
  addTechnologyApi, addThemeApi,
  removeThemeApi, editThemeApi
} from '../../../backend/requests';
import {
  generateTechnologyPage, getTechnologiesAction,
  addThemeActionSuccess, updateThemeActionSuccess,
  removeThemeActionSuccess
} from './actions';
import { togglePopup } from '../common/actions';


// Technologies
export const getTechnologies = () => dispatch => {
  getTechnologiesApi()
    .then(res => res.data)
    .then(technologies => dispatch(getTechnologiesAction(technologies)));
};

export const addTechnology = (name, description) => dispatch => {
  addTechnologyApi(name, description)
    .then(dispatch(getTechnologies()))
};


// Themes
export const getThemes = idTechnology => (dispatch) => {
  getThemesApi(idTechnology)
    .then(res => res.data)
    .then(themes => dispatch(generateTechnologyPage({themes: [...themes], idTechnology })))
};

export const addTheme = (theme) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.idTechnology;
  addThemeApi(theme)
    .then(dispatch(addThemeActionSuccess()))
    .then(dispatch(getThemes(idTechnology)))
};

export const removeTheme = (id) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.idTechnology;
  removeThemeApi(id)
    .then(dispatch(removeThemeActionSuccess()))
    .then(dispatch(togglePopup(false)))
    .then(dispatch(getThemes(idTechnology)))
};

export const editTheme = (id, theme) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.idTechnology;
  editThemeApi(id, theme)
    .then(dispatch(updateThemeActionSuccess()))
    .then(dispatch(getThemes(idTechnology)))
};