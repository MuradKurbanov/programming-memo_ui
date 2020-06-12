import axios from 'axios';
import { retryAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  baseURL: '/',
  headers: { 'Cache-Control': 'no-cache' },
  adapter: retryAdapterEnhancer(axios.defaults.adapter)
});

// Theme
// Create new theme with idTechnology
export const addThemeApi = (theme) => http.post(`/themes`, theme);

// Read themes by idTechnology
export const getThemesApi = (idTechnology) => http.get(`/themes/${idTechnology}?timestamp=${Date.now()}`, { cache: false });

// Update theme by id
export const editThemeApi = (id, theme) => http.put(`/themes/${id}`, theme);

//  Delete theme by id
export const removeThemeApi = (id) => http.delete(`/themes/${id}`);


// Technology
// Create
export const addTechnologyApi = (name, description) => http.post(`/technologies`, { name, description });

// Read
export const getTechnologiesApi = (id) => http.get(`/technologies/${id}?timestamp=${Date.now()}`,{ cache: false });

// Update
export const editTechnologyApi = (id, technology) => http.put(`/technologies/${id}`, technology);

// Delete
export const deleteTechnologyApi = (id) => http.delete(`/technologies/${id}`);