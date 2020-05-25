import { getThemeApi } from '../../../backend/requests';
import { saveTheme } from './actions';

export const getTheme = (url) => (dispatch) => {
  getThemeApi(url)
    .then(res => res.data)
    .then(content => dispatch(saveTheme(content)))
    .catch(err => {
      dispatch(saveTheme({}))
      return err
    });
};