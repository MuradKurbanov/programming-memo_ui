import axios from 'axios';

// Theme
// Get themes by idTechnology
export const getThemesApi = (idTechnology) => axios.get(`/themes/${idTechnology}`);

// Create new theme with idTechnology
export const addThemeApi = (theme) => axios.post(`/themes`, theme);

//  Delete theme by id
export const removeThemeApi = (id) => axios.delete(`/themes/${id}`);

// Update theme by id
export const editThemeApi = (id, theme) => axios.put(`/themes/${id}`, theme);


// Technology
export const getTechnologiesApi = () => axios.get(`/technologies`);

export const addTechnologyApi = (name, description) => axios.post(`/technologies`, { name, description });