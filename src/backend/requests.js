import axios from 'axios';


// Theme
export const getThemeApi = (pathname) => axios.get(`/themes/${pathname}`);

export const addThemeApi = (theme) => axios.post(`/themes`, theme);


// Technology
export const getTechnologiesListApi = () => axios.get(`/technologies`);

export const addTechnologyApi = (name, description) => axios.post(`/technologies`, { name, description });