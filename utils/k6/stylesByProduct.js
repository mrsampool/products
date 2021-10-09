const http = require('k6/http');
const {sleep} = require('k6');

export const options = {
  stages: [{duration: '10s', target: 500}],
};
export default function () {
  let productId = Math.floor(Math.random() * 1000000);
  http.get(`http://ec2-184-169-237-1.us-west-1.compute.amazonaws.com/products/${productId}/styles`);
  sleep(1);
}