import axios from 'axios';
import { BASE_URL } from '../api';

const userAPI = {
  getUsers: async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  },
  deleteUserById: async (id) => {
    return await axios.delete(`${BASE_URL}/users/${id}`);
  },
};

export default userAPI;
