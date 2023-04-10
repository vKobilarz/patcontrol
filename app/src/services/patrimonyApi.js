import axios from 'axios';

const PatrimonyApi = axios.create({ baseURL: 'http://localhost:3333' });

export default PatrimonyApi;
