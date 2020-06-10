const app = require('./app');
const supertest_req = require('supertest');

describe('GET /', () => {
  it('should repsonse with a message',async () => {
    const response = await supertest_req(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)

    expect(response.body.status).toEqual('success');
  });
});