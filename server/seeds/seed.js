const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedData = require('./seedData.js');

const { getUser, getPost, getComment } = require('./seedData');

db.on('error', (err) => err);

db.once('open', async () => {
  console.log('connected');
  await Post.deleteMany({});
  await User.deleteMany({});
  await Comment.deleteMany({});

  const users = getUser();
  const posts = getPost();
  const comments = getComment();
  
  console.log(users);

  // alternative to line 33
  // for (let index = 0; index < users.length; index++) {
  //   await User.create({
  //     username: users[index].username,
  //     fullname: users[index].fullname,
  //     email: users[index].email,
  //     password: users[index].password,
  //   });
  // }

  console.log('users seeded');
  await User.collection.insertMany(users);
  await Post.collection.insertMany(posts);
  await Comment.collection.insertMany(comments);
 
  console.table(users);
  console.table(posts);
  console.table(comments);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});