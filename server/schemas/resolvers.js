//const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
//const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.Products) {
          const productData = await Product.findOne({ _id: context.Product._id })
            
          return productData;
        }
  
       // throw new AuthenticationError('Not logged in');
      },
     // Product: async () => {
      //  return Product.find()
          
     },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
       // if (!user) {
       //   throw new AuthenticationError('Incorrect credentials');
        }
  
      //  const correctPw = await user.isCorrectPassword(password);
  
      //  if (!correctPw) {
      //    throw new AuthenticationError('Incorrect credentials');
       // }
  //
      //  const token = signToken(user);
      //  return { token, user };
      },
      
      
    }
  

  
  
  module.exports = resolvers;
