const {app} = require('./index');
const request = require('supertest');

describe('something', ()=>{
  it('should do something', async ()=>{
    const response = await request(app).get('/')
    console.log(response);
  });
})