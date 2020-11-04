import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Wilton-Lucas/apiRestFake/transacoes/'

});

export default api;