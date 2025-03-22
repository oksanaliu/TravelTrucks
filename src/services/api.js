import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCampers = async () => {
  try {
    const res = await axios.get(BASE_URL);
    console.log('>>> API response data:', res.data); // консоль
    return Array.isArray(res.data?.items) ? res.data.items : [];
  } catch (error) {
    console.error('>>> Error while fetching campers:', error);
    return [];
  }
};

export const getCamperById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};
