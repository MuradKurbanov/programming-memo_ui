import { getThemeApi } from '../../../backend/requests';
import { saveTheme } from './actions';


export const getTheme = (url) => (dispatch) => {
  getThemeApi(url)
    .then(res => dispatch(saveTheme(res)))
    .catch(err => console.log(err, 'err'));
};