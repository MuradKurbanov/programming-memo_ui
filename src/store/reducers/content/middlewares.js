import { getThemeApi, getTechnologiesListApi, addTechnologyApi } from '../../../backend/requests';
import { saveTheme, getTechnologiesListAction } from './actions';

export const getTheme = (url) => dispatch => {
  getThemeApi(url)
    .then(res => res.data)
    .then(content => dispatch(saveTheme(content)))
    .catch(err => {
      dispatch(saveTheme({}));
      return err
    });
};

export const getTechnologiesList = () => dispatch => {
  getTechnologiesListApi()
    .then(res => res.data)
    .then(technologyList => dispatch(getTechnologiesListAction(technologyList)))
};

export const addTechnology = (name, description) => dispatch => {
  addTechnologyApi(name, description)
    .then(dispatch(getTechnologiesList()))
};