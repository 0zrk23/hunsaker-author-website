const {Book, Post} = require('../models')
const resolvers = {
  Query: {
    books: async (parent, args, context) => {
      return await Book.find();
    },
    book: async (parent, {_id}, context) => {
      return await Book.findById({_id});
    },
    posts: async (parent, args, context) => {
      return await Post.find();
    },
    post: async (parent, args, context) => {
      const {_id} = args;
      return await Post.findById({_id});
    }
  },
  Mutation: {
    addBook: async (parent, args, context) => {
      return await Book.create({...args});
    },
    updateBook: async (parent, args, context) => {
      //finds bookInstance
      const bookInstance = await Book.findById(args._id);
      const temp = {...args};
      delete temp._id;
      //updates key value pairs based on unknown arguments
      for (const [key,value] of Object.entries(temp)){
        bookInstance[key] = value;
      }
      //saves and returns the Book
      bookInstance.save();
      return bookInstance;
    },
    addPost: async (parents, args, context) => {
      // const {title, body} = args;
      const postInstance = await Post.create(args);
      return postInstance;
    }
  }
}

module.exports = resolvers;