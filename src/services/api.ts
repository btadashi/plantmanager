import axios from 'axios';

const api = axios.create({
  //Insert your IP address:
  baseURL: '[your-ip]:3333'
});

export default api;