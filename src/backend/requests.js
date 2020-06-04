import axios from 'axios';

export const getThemeApi = (pathname) => axios.get(`${pathname}`);

export const getTechnologiesListApi = () => axios.get(`/technologies`);

export const addTechnologyApi = (name, description) => axios.post(`/technologies`, { name, description });