const { getPost, getPosts, getAgent, getUser } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('post routes', () => {
  it('creates a new post', async() => {
  const user = await getUser()
    return getAgent()
      .post('/api/v1/auth/signup')
      .send({
        caption: 'TEST caption',
        passwordHash: 'hannahsPassword',
        tags: ['tag'],
        user: user._id'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: expect.any(String),
          __v: 0
        });
      });
  });

//   it('logs in a user', async() => {
//     const user = await getUser();
//     return request(app)
//       .post('/api/v1/auth/login')
//       .send({
//         username: 'pajamas',
//         password: 'pajamasallday'
//       })
//       .then(res => {
//         expect(res.body).toEqual({
//           _id: expect.any(String),
//           username: expect.any(String),
//           __v: 0
//         });
//       });
//   });

//   it('verifies a logged in user', () => {
//     return getAgent()
//       .get('/api/v1/auth/verify')
//       .then(res => {
//         expect(res.body).toEqual({
//           _id: expect.any(String),
//           username: expect.any(String),
//           __v: 0
//         });
//       });
//   });
});
