const { getUser, getAgent } = require('../db/data-helpers');
const User = require('../lib/models/User');
const request = require('supertest');
const app = require('../lib/app');

describe('auth routes', () => {
  it('signs up a user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'hannah',
        passwordHash: 'hannahsPassword'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: expect.any(String),
          __v: 0
        });
      });
  });

  it('logs in a user', async() => {
    const user = await getUser();
    return request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'pajamas',
        password: 'pajamasallday'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: expect.any(String),
          __v: 0
        });
      });
  });

  it('verifies a logged in user', () => {
    return getAgent()
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: expect.any(String),
          __v: 0
        });
      });
  });
});
