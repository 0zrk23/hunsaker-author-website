import { gql } from "@apollo/client"


export const GET_BOOKS = gql`
  query Query {
    books {
      _id
      cover
      elevatorPitch
      genre
      links {
        site
        url
      }
      mockUp
      synopsis
      title
    }
  }
`

export const GET_BOOK = gql`
  query Query ($_id: ID!) {
    book (_id: $_id){
      _id
      cover
      elevatorPitch
      genre
      links {
        site
        url
      }
      mockUp
      synopsis
      title
    }
  }
`
export const GET_POSTS = gql`
  query Query {
    posts {
      _id
      body
      dateCreated
      title
    }
  }
`

export const GET_POST = gql`
   query Query ($_id: ID!) {
    post (_id: $_id){
      _id
      body
      dateCreated
      title
    }
   }
`

