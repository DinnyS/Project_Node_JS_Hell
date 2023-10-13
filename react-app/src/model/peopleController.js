import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`);
    console.log('Set Data Complete')
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

export const getDataById = async (endpoint, id) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data by ID (${id}):`, error);
    throw error;
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

  export const updateDataById = async (endpoint, id, data) => {
    try {
      const response = await axios.put(`${baseURL}/${endpoint}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating data by ID:', error);
      throw error;
    }
  };

  export const deleteDataById = async (endpoint, id) => {
    try {
      await axios.delete(`${baseURL}/${endpoint}/${id}`);
    } catch (error) {
      console.error('Error deleting data by ID:', error);
      throw error;
    }
  };

let personID = ''

export function setIdperson(id){
  personID = id
}

export function getIdperson(){
  return personID
}


let keyword = ''

export function setKeyword(keywordset){
  keyword = keywordset
}

export function getKeyword(){
  return keyword
}

export const filterDataByFname = async (endpoint, name) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`);
    const filteredData = response.data.filter(item => item.fname.includes(name));
    return filteredData;
  } catch (error) {
    console.error(`Error filtering data by fname (${name}):`, error);
    throw error;
  }
};


let theHell = ''

export function setTheHell(thisHell){
  theHell = thisHell
}

export function getTheHell(){
  return theHell
}


export const filterDataByHell = async (hellName) => {
  try {
    // Fetch the data first
    const data = await fetchData('peoples'); // Replace with your desired endpoint
    const filteredData = data.filter(item => item.hell === hellName);
    return filteredData;
  } catch (error) {
    console.error(`Error filtering data by hell (${hellName}):`, error);
    throw error;
  }
};





