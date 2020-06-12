const supertest_req = require('supertest');
const app = require('../../app');

// jest will config NODE_ENV = test
// there fore it will get test knex config which has home_inventory_app_test DB
// to have access to that database:
// - start postgres container (will create home_inventory_app DB by config in docker-compose.yml)
// - docker -exec into the container
// - create the test POSTGRES DB "psql cmd"
// - supertest will now have access to the test DB

describe('GET host/api/v1/cities', () => {
  it('should get the cities list', async (done) => {
    const response = await supertest_req(app)
      .get('/api/v1/cities/')
      .expect('Content-Type',/json/)
      .expect(200);
    
    expect(response.body.status).toBe('success');
    done();
  });
});