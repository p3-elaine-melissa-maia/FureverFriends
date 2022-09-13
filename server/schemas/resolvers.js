const { User, Comment, Post } = require('../models');
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('pk_test_51LgrUmCwzDCX8biEBVfXXeZWz9TwWi5yG2q9k7lVBhctG9y2HCrcy4AVcltXn5VKD3dbEcxNTOgzVggc1lekY2tJ00sHgXbKu8');



const resolvers = {
  Query: {
    users: async () => {
      // populate posts and comments subdocuments when querying for users
      return await User.find({}).populate('posts').populate({
        path: 'posts',
        populate: 'comments'
      });
    },
    user: async (parent, { userId }) => {
      return (await User.findOne({ _id: userId })).populate('posts');
    },
    posts: async () => {
      // populate comments subdocument when querying for posts
      return await Post.find({}).populate('comments');
    },
    comments: async () => {
      return await Comment.find({});
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }

  },
  // define functions that will fulfill the mutations
  Mutation: {
    addUser: async (parent, { username, fullname, email, password }) => {
      const user = await User.create({ username, fullname, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!')
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user }
    },
    addPost: async (parent, { userId, img, caption }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { posts: img } },
          { 
            new: true,
            runvalidators: true, 
          }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
        { _id: postId },
        { $addToSet: { comments: commentBody }},
        { new: true } 
        );
      }
      throw new AuthenticationError('You need to be logged in!')
    }, 
  },
};

module.exports = resolvers;
