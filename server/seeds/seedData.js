const usernames = [
  'davidrose',
  'alexisrose',
  'steviebud',
];

const fullnames = [
  'David Rose',
  'Alexis Rose',
  'Stevie Bud'
]

const emails = [
  'drose@gmail.com',
  'alexisrose@gmail.com',
  'sbud@gmail.com'
];

const passwords = [
  'password',
  'password',
  'password'
]

const captions = [
  'I am trying very hard not to connect with people right now',
  'Cats are the best pets',
  'So thankful for my pet'
]

const commentBodies = [
  'Very uninterested in that opinion',
  'Cute, David',
  'I want another pet!'
]

const users= [];

const getUser = () => {
   
  for (let i = 0; i < 3; i++) {
    let username = usernames[i];
    const fullname = fullnames[i];
    const email = emails[i];
    const password = passwords[i];

    users.push({
      username,
      fullname,
      email,
      password
    });
  }
  return users;
}

const posts=[];

const getPost = () => {
  for (let i = 0; i < 3; i++) {
    let username = usernames[i];
    let caption = captions[i];

    posts.push({
      username,
      caption
  });
  }
  return posts;
}

const comments =[];

const getComment = () => {
  for (let i = 0; i < 3; i++) {
    let username = usernames[i];
    let commentBody = commentBodies[i];

    comments.push({
      username,
      commentBody
  });
  }
  return comments;
}



// Export the functions for use in seed.js
module.exports = { getUser, getPost, getComment };