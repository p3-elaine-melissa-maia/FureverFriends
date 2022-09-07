const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      'Please enter a valid email address!'
     ]
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
],
friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
],
},
{
  toJSON: {
      virtuals: true,
  },
  //prevents virtuals from creating duplicates of _id as 'id'
  id: false,
});

userSchema.virtual('friendCount').get(function () {
  return `${this.friends.length}`;
});

// create the User model using the UserSchema
const User = model('User', userSchema);
// export the User model
module.exports = User;
