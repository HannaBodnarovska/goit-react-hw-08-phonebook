import axios from 'axios';

const API_BASE_URL = 'https://connections-api.herokuapp.com';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users/signup`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post(`${API_BASE_URL}/users/logout`);
  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/users/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Управління контактами
export const fetchContacts = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addContact = async (contactData, token) => {
  const response = await axios.post(`${API_BASE_URL}/contacts`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteContact = async (contactId, token) => {
  const response = await axios.delete(`${API_BASE_URL}/contacts/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateContact = async (contactId, contactData, token) => {
  const response = await axios.patch(`${API_BASE_URL}/contacts/${contactId}`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
