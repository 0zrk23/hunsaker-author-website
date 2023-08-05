import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_URI}/graphql`,
})

//set up for adding Athorization header before each request
const authRestLink = new ApolloLink((operation, forward) => {
  operation.setContext(({headers}) => {
    let token = localStorage.getItem("token");
    if(!token){
      token = "empty"
    }
    return {
      headers: {
        ...headers,
        Authorization: token
      }
    }
  });
  return forward(operation);
});

// const restLink = new RestLink({ uri: `${process.env.REACT_APP_URI}/graphql` })

export const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  link: ApolloLink.from([authRestLink, httpLink])
});