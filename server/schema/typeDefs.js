const typeDefs = `#graphql
  # gql typeDefs
  type Post {
    _id: ID!
    title: String!
    body: String!
    dateCreated: String!
  }

  type Book {
    _id: ID
    title: String!
    synopsis: String!
    elevatorPitch: String!
    cover: String
    mockUp: String
    links: [Link]!
    genre: [String]!
  }

  type Link {
    _id: ID!
    site: String!
    url: String!
  }

  type Admin {
    _id: ID!
    username: String!
  }

  type Auth {
    token: ID!
    admin: Admin
  }

  input linkContent {
    site: String!
    url: String!
  }

  type Query {
    books: [Book]
    book(_id: ID!): Book
    posts: [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    #type for logging in
    login(username: String!, password: String!): Auth
    #type for adding book
    addBook(
      title: String!
      cover: String
      mockUp: String
      synopsis: String!
      elevatorPitch: String!
      links: [linkContent]!
      genre: [String]!
      labels: [String]
      tags: [String]
    ): Book
    #type for updating book
    updateBook(
      _id: ID!
      title: String
      cover: String
      mockUp: String
      synopsis: String
      elevatorPitch: String
      links: [linkContent]
      genre: [String]
      lables: [String]
      tags: [String]
    ): Book
    addPost(
      title: String!
      body: String!
    ): Post
    updatePost(
      _id: ID!
      title: String
      body: String
    ): Post
  }
`;

module.exports = typeDefs;