import {
  getThemesApi, getTechnologiesApi, addTechnologyApi, addThemeApi,
  removeThemeApi, editThemeApi, editTechnologyApi, deleteTechnologyApi
} from '../../../backend/requests';
import {
  getThemesSuccess, getTechnologiesAction, addThemeSuccess, updateThemeSuccess,
  removeThemeSuccess, updateTechnologySuccess, deleteTechnologySuccess, addTechnologies
} from './actions';

// Technologies
export const getTechnologies = (id) => dispatch => {
  getTechnologiesApi(id || '')
    .then(res => res.data)
    .then(technologies => dispatch(getTechnologiesAction(technologies)));
};

export const addTechnology = (name, description) => dispatch => {
  addTechnologyApi(name, description)
    .then(dispatch(addTechnologies()))
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
export const getThemes = (idTechnology) => dispatch => {
  getThemesApi(idTechnology)
    .then(res => res.data)
    .then(themes => dispatch(getThemesSuccess({themes: [...themes], idTechnology })))
};

export const addTheme = (theme) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.technology.idTechnology;
  addThemeApi(theme)
    .then(dispatch(addThemeSuccess()))
    .then(dispatch(getThemes(idTechnology)))
};

export const removeTheme = (id) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.technology.idTechnology;
  removeThemeApi(id)
    .then(dispatch(removeThemeSuccess()))
    .then(dispatch(getThemes(idTechnology)))
};

export const updateTheme = (id, theme) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.technology.idTechnology;
  editThemeApi(id, theme)
    .then(dispatch(updateThemeSuccess()))
    .then(dispatch(getThemes(idTechnology)))
};
