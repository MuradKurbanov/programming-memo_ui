import {
  getThemesApi, getTechnologiesApi,
  addTechnologyApi, addThemeApi,
  removeThemeApi, editThemeApi,
  editTechnologyApi, deleteTechnologyApi
} from '../../../backend/requests';
import {
  getThemesSuccess, getTechnologiesAction,
  addThemeActionSuccess, updateThemeActionSuccess,
  removeThemeActionSuccess, updateTechnologySuccess,
  deleteTechnologySuccess
} from './actions';
import { togglePopup } from '../common/actions';

// Technologies
export const getTechnologies = (id) => dispatch => {
  getTechnologiesApi(id || '')
    .then(res => res.data)
    .then(technologies => dispatch(getTechnologiesAction(technologies)));
};

export const addTechnology = (name, description) => dispatch => {
  addTechnologyApi(name, description)
    .then(dispatch(getTechnologies()))
};

export const updateTechnology = (id, technology) => dispatch => {
  editTechnologyApi(id, technology)
    .then(dispatch(updateTechnologySuccess()))
    .then(dispatch(getTechnologies()))
};

export const deleteTechnology = (id) => (dispatch) => {
  deleteTechnologyApi(id)
    .then(dispatch(deleteTechnologySuccess()))
    .then(dispatch(getTechnologies()))
};

// Themes
export const getThemes = idTechnology => (dispatch) => {
  getThemesApi(idTechnology)
    .then(res => res.data)
    .then(themes => dispatch(getThemesSuccess({themes: [...themes], idTechnology })))
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
    .then(res => res.result && dispatch(removeThemeActionSuccess()))
    .then(dispatch(togglePopup(false)))
    .then(dispatch(getThemes(idTechnology)))
};

export const updateTheme = (id, theme) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.idTechnology;
  editThemeApi(id, theme)
    .then(dispatch(updateThemeActionSuccess()))
    .then(dispatch(getThemes(idTechnology)))
};