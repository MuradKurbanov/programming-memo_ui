import axios from 'axios';

export const getThemeApi = (url) => axios.get(`${url}`);

export const getTechnologiesListApi = () => axios.get(`/technologies`);

export const addTechnologyApi = (name) => axios.post(`/technologies`, { name });