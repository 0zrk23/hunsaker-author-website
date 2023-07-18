const typeDefs = `#graphql
  # gql typeDefs
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

  input linkContent {
    site: String!
    url: String!
  }

  type Query {
    books: [Book]
    book(_id: ID!): Book
  }

  type Mutation {
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
  }
`;

module.exports = typeDefs;