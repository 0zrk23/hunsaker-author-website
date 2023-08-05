

export const GET_BOOKS = `
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

export const GET_BOOK = `
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
export const GET_POSTS = `
  query Query {
    posts {
      _id
      body
      dateCreated
      title
    }
  }
`

export const GET_POST = `
   query Query ($_id: ID!) {
    post (_id: $_id){
      _id
      body
      dateCreated
      title
    }
   }
`

