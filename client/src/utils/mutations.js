
export const LOGIN = `
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

export const UPDATE_BOOK = `
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

export const ADD_BOOK = `
  mutation Mutation($title: String!, $synopsis: String!, $elevatorPitch: String!, $cover: String, $mockUp: String, $genre: [String]!, $labels: [String], $tags: [String], $links: [linkContent]!) {
  addBook(title: $title, synopsis: $synopsis, elevatorPitch: $elevatorPitch, cover: $cover, mockUp: $mockUp, genre: $genre, labels: $labels, tags: $tags, links: $links) {
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

export const ADD_POST = `
  mutation Mutation($title: String!, $body: String!) {
    addPost(title: $title, body: $body) {
      _id
      body
      dateCreated
      title
    }
  }
`

export const UPDATE_POST =  `
  mutation Mutation($_id: ID!, $title: String, $body: String) {
    updatePost(_id: $_id, title: $title, body: $body) {
      _id
      body
      dateCreated
      title
    }
  }
`