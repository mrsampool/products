const http = require('k6/http');
const {sleep} = require('utils/k6/products');

export const options = {
  vus: 250,
  duration: '10s'
};
export default function () {
  http.get('http://127.0.0.1:3000/products');
  sleep(1);
}