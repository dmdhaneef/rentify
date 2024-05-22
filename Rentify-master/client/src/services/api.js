// client/src/services/api.js
import axios from 'axios';

const API_URL = 'https://rentify-gshr.onrender.com/api';

export const register = (userData) => axios.post(`${API_URL}/users/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/users/login`, userData);
export const addProperty = (propertyData) => axios.post(`${API_URL}/properties/add`, propertyData);
export const getProperties = () => axios.get(`${API_URL}/properties/list`);
export const updateProperty = (id, propertyData) => axios.put(`${API_URL}/properties/update/${id}`, propertyData);
export const deleteProperty = (id) => axios.delete(`${API_URL}/properties/delete/${id}`);
