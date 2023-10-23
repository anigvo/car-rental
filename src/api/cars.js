import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64bbe01b7b33a35a4446c4d4.mockapi.io/api/v1',
});

export const getCars = async () => {
  try {
    const response = await instance.get(`/carsData`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
 