import axios from 'axios';

const DEVELOPMENT_URL = 'http://localhost:8000/';
const PRODUCTION_URL = 'https://lithehax-medlem-9abc9f434ec7.herokuapp.com/';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

function request(url, method, data) {
  return instance.request({
    url: url,
    method: method,
    data: data,
    responseType: 'json',
  });
}

export default request;
