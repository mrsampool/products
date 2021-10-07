const http = require('k6/http');
const {sleep} = require('k6');

export const options = {
  vus: 100,
  duration: '10s'
};
export default function () {
  http.get('http://54.176.172.64/products/5/styles');
  sleep(1);
}