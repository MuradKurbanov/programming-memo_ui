import {
  getThemesApi, getTechnologiesApi,
  addTechnologyApi, addThemeApi,
  removeThemeApi
} from '../../../backend/requests';
import { generateTechnologyPage, getTechnologiesAction } from './actions';
import { togglePopup } from '../common/actions';


// Technologies
export const getTechnologies = () => dispatch => {
  getTechnologiesApi()
    .then(res => res.data)
    .then(technologies => dispatch(getTechnologiesAction(technologies)))``
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

export const addTheme = (theme) => (dispatch) => {
  addThemeApi(theme)
    .then(dispatch(getThemes(theme.technology.idTechnology)))
};

export const removeTheme = (id) => (dispatch, getStore) => {
  const idTechnology = getStore().Content.technologyPage.idTechnology;
  removeThemeApi(id)
    .then(dispatch(togglePopup(false)))
    .then(dispatch(getThemes(idTechnology)))
};