import axios from 'axios';

export const getThemeApi = (url) => axios.get(`${url}`)