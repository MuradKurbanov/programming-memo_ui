import axios from 'axios';
import { retryAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  baseURL: '/',
  headers: { 'Cache-Control': 'no-cache' },
  adapter: retryAdapterEnhancer(axios.defaults.adapter)
});

// Topic
// Create new theme with idTechnology
export const addThemeApi = (topic) => http.post(`/topics-service/`, topic);

// Read topics by idTechnology
export const getThemesApi = (idTechnology) => http.get(`/topics-service/${idTechnology}?timestamp=${Date.now()}`, { cache: false });

// Update theme by id
export const editThemeApi = (id, topic) => http.put(`/topics-service/${id}`, topic);

//  Delete theme by id
export const removeThemeApi = (id) => http.delete(`/topics-service/${id}`);


// Technology
// Create
export const addTechnologyApi = (name, description) => http.post(`/technologies-service/`, { name, description });

// Read
export const getTechnologiesApi = (id) => http.get(`/technologies-service/${id}?timestamp=${Date.now()}`, { cache: false });

// Update
export const editTechnologyApi = (id, technology) => http.put(`/technologies-service/${id}`, technology);

// Delete
export const deleteTechnologyApi = (id) => http.delete(`/technologies-service/${id}`);
