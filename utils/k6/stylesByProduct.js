const http = require('k6/http');
const {sleep} = require('k6');

export const options = {
  stages: [{duration: '10s', target: 500}],
};
export default function () {
  let productId = Math.floor(Math.random() * 1000000);
  http.get(`http://ec2-54-153-113-93.us-west-1.compute.amazonaws.com/products/${productId}/styles`);
  sleep(1);
}