import axios from 'axios';

const params = { params: {}, headers: { 'Cache-Control': 'no-cache'} };

// ?timestamp=${Date.now()}

// Theme
// Create new theme with idTechnology
export const addThemeApi = (theme) => axios.post(`/themes`, theme);

// Read themes by idTechnology
export const getThemesApi = (idTechnology) => axios.get(`/themes/${idTechnology}`, params);

// Update theme by id
export const editThemeApi = (id, theme) => axios.put(`/themes/${id}`, theme, params);

//  Delete theme by id
export const removeThemeApi = (id) => axios.delete(`/themes/${id}`, params);


// Technology
// Create
export const addTechnologyApi = (name, description) => axios.post(`/technologies`, { name, description });

// Read
export const getTechnologiesApi = (id) => axios.get(`/technologies/${id}`, params);

// Update
export const editTechnologyApi = (id, technology) => axios.put(`/technologies/${id}`, technology, params);

// Delete
export const deleteTechnologyApi = (id) => axios.delete(`/technologies/${id}`, params);