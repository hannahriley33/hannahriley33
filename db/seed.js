  
const chance = require('chance').Chance();
const User = require('../lib/models/User');
const Post = require('../lib/models/Post');
// const Note = require('../lib/models/Note');

module.exports = async({ usersToCreate = 15, notesToCreate = 50 } = {}) => {
  const loggedInUser = await User.create({
    username: 'pajamas',
    password: 'pajamasallday'
  });

  const users = await User.create([...Array(usersToCreate)].slice(1).map(() => ({
    username: chance.email(),
    password: chance.name()
  })));

  // await Post.create([...Array(postsToCreate)].map(() => ({
  //   photoUrl: chance.profession(),
  //   tags: [chance.name(), chance.name(), chance.animal()],
  //   caption: chance.sentence(),
  //   user: chance.weighted([loggedInUser, ...users], [2, ...users.map(() => 1)])._id
  // })));
};

// await Note.create([...Array(notesToCreate)].map(() => ({
//   title: chance.profession(),
//   body: chance.sentence(),
//   author: chance.weighted([loggedInUser, ...users], [2, ...users.map(() => 1)])._id
// })));

