import { getThemeApi, getTechnologiesListApi, addTechnologyApi, addThemeApi } from '../../../backend/requests';
import { saveTheme, getTechnologiesListAction } from './actions';

// Theme
export const getThemes = (url) => dispatch => {
  getThemeApi(url)
    .then(res => res.data)
    .then(themes => dispatch(saveTheme(themes)))
    .catch(err => {
      dispatch(saveTheme({}));
      return err
    });
};

export const addTheme = (theme) => dispatch => {
  addThemeApi(theme)
    .then(dispatch(getThemes(theme.technology._id)))
};

// Technology
export const getTechnologiesList = () => dispatch => {
  getTechnologiesListApi()
    .then(res => res.data)
    .then(technologyList => dispatch(getTechnologiesListAction(technologyList)))
};

export const addTechnology = (name, description) => dispatch => {
  addTechnologyApi(name, description)
    .then(dispatch(getTechnologiesList()))
};