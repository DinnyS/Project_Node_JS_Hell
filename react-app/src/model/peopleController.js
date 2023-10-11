import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`);
    console.log('Set Data Complete')
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for potential handling in your component
  }
};

export const addData = async (endpoint, data) => {
    try {
      const response = await axios.post(`${baseURL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Error adding data:', error);
      throw error;
    }
  };

export const updateData = async (endpoint, data) => {
  try {
    const response = await axios.put(`${baseURL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    await axios.delete(`${baseURL}/${endpoint}`);
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
