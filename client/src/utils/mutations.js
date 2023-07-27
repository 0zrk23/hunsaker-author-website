//test
import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password){
      admin{
        _id
        username
      }
      token
    }
  }
`

export const UPDATE_BOOK = gql`
  mutation Mutation($_id: ID!, $title: String, $cover: String, $mockUp: String, $synopsis: String, $elevatorPitch: String, $links: [linkContent], $genre: [String], $lables: [String], $tags: [String]) {
    updateBook(_id: $_id, title: $title, cover: $cover, mockUp: $mockUp, synopsis: $synopsis, elevatorPitch: $elevatorPitch, links: $links, genre: $genre, lables: $lables, tags: $tags) {
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