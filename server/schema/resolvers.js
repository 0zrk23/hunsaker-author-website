const {Book, Post, Admin} = require('../models')
const {GraphQLError} = require('graphql');
const { signToken, checkAuth } = require('../utils/auth');

// checkAuth: async function(context,errorMessage){
//   const {Authorization} = context.headers;
//   if(!Authorization || !validToken(Authorization)){
//     console.log(errorMessage);
//     throw new GraphQLError('Unauthorized to make this request',{
//       extensions: {
//         code: 'UNAUTHORIZED',
//         http: '401'
//       }
//     })
//   }
// }

// unAuthContent = ['Unauthorized to make this request',
// {
//   extensions: {
//     code: 'UNAUTHORIZED',
//     http: '401'
//   }
// }];

const resolvers = {
  Query: {
    //Logs query and returns all Books
    books: async (parent, args, context) => {
      
      console.log(`${Date().toString()}: Books Queried`)
      return await Book.find();
    },

    //Logs query and returns specified Book
    book: async (parent, {_id}, context) => {
      console.log(`${Date().toString()}: Book(${_id}) Queried`)
      return await Book.findById({_id});
    },

    //Logs query and returns all Posts
    posts: async (parent, args, context) => {
      console.log(`${Date().toString()}: Posts Queried`)
      return await Post.find();
    },

    //Logs query and returns specified Post
    post: async (parent, args, context) => {
      const {_id} = args;
      console.log(`${Date().toString()}: Post(${_id}) Queried`)
      return await Post.findById({_id});
    }
  },
  Mutation: {
    //Adds a book if authorized
    addBook: async (parent, args, context) => {
      //checks authorization, throws error if unauthorized
      await checkAuth(context,`${Date().toString()}: Unauthorized addBook mutation`);
      //creates new book and returns the document
      const newBook = await Book.create(args);
      console.log(`${Date().toString()}: New Book(${newBook._id}) Added`);
      return newBook
    },

    //Updates specified book if authorized
    updateBook: async (parent, args, context) => {
      //checks authorization, throws error if unauthorized
      await checkAuth(context,`${Date().toString()}: Unauthorized updateBook mutation. ID: ${args._id}`);
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
      console.log(`${Date().toString()}: Book(${bookInstance._id}) Updated`);
      return bookInstance;
    },

    //Adds a post if authorized
    addPost: async (parents, args, context) => {
      //checks authorization, throws error if unauthorized
      await checkAuth(context,`${Date().toString()}: Unauthorized addPost mutation`);
      //creates new post
      const newPost = await Post.create(args);
      console.log(`${Date().toString()}: New Post(${newPost._id}) Added`);
      return newPost;
    },


    login: async (parents, args, context) => {
      const {username, password} = args;
      const admin = await Admin.findOne({username});
      if(!admin){
        console.log(`${Date().toString()}: Failed Login attempt`)
        throw new GraphQLError('Login Information is Incorrect',{
          extensions: {
            code: 'INCORRECT_LOGIN',
            http: '404'
          }
        })
      }
      
      if(!(await admin.verifyPassword(password))){
        console.log(`${Date().toString()}: Failed Login attempt`)
        throw new GraphQLError('Login Information is Incorrect',{
          extensions: {
            code: 'INCORRECT_LOGIN',
            http: '404'
          }
        })
      }

      console.log(`${Date().toString()}: Successfull Login attempt`)
      return {
        token: signToken(admin),
        admin
      }
    }
  }
}

module.exports = resolvers;