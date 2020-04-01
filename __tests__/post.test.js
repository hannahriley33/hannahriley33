const { getPost, getPosts, getAgent, getUser } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('post routes', () => {
  it('creates a new post', async() => {
    const user = await getUser({ username: 'pajamas' });
    return getAgent()
      .post('/api/v1/posts')
      .send({
        caption: 'this is a caption',
        photoUrl: 'myPhoto.url',
        tags: ['selfie', 'angles', 'wfh'],
        user: user._id
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          caption: expect.any(String),
          photoUrl: expect.any(String),
          tags: [expect.any(String), expect.any(String), expect.any(String)],
          user: expect.any(String),
          __v: 0
        });
      });
  });
  
  it('gets a post by id', async() => {
    const user = await getUser({ username: 'pajamas' });
    const post = await getPost({ user: user._id });
    return getAgent()
      .get(`/api/v1/posts/${post._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...post,
          user: user
        });
      });
  });

  it('gets all posts', async() => {
    const posts = await getPosts
    ();
    return getAgent()
      .get('/api/v1/posts')
      .then(res => {
        expect(res.body).toEqual(posts);
      });
  });
});
