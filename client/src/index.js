import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import './sass/style.scss';

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

const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  link: ApolloLink.from([authRestLink, httpLink])
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
