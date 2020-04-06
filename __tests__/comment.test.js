const { getPost, getUser, getAgent, getComment } = require('../db/data-helpers');

describe('comments routes', () => {
  it('creates a comment', async() => {
    const user = await getUser({ username: 'pajamas' });
    const post = await getPost({ user: user._id });
    return getAgent()
      .post('/api/v1/comments')
  })
})