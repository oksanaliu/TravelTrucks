import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCampers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCamperById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
