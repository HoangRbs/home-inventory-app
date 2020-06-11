const supertest_req = require('supertest');
const app = require('../../app');

describe('GET host/api/v1/cities', () => {
  it('should get the cities list', async () => {
    const response = await supertest_req(app)
      .get('/api/v1/cities/')
      .expect('Content-Type',/json/)
      .expect(200);
    
    expect(response.body.status).toBe('success');
  });
});