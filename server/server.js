const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4');
const {ApolloServerPluginDrainHttpServer} = require('@apollo/server/plugin/drainHttpServer');
const path = require('path');
const express = require('express');
const http = require('http');
const cors = require('cors');
const {typeDefs, resolvers} = require('./schema');
const db = require('./config/connection');
require('dotenv').config();


// Express setup
const app = express();

//set 'build' directory to server static files
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join (__dirname,'../client/build')))
}

//serve web page
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

//
const httpServer = http.createServer(app);
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
});

const initServer = async (typeDefs, resolver) => {
  await apolloServer.start();
  app.use(
    '/graphql',
    cors({origin: ['http://localhoast:3000']}),
    express.urlencoded({ extended: false }),
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  // httpServer.listen({port: process.env.PORT},resolver);
  db.once('open', async () => {
    await new Promise((resolve) => httpServer.listen({port: process.env.PORT},resolve))
    if(process.env.NODE_ENV !== 'production'){
      console.log(`API server running on port: ${process.env.PORT}`)
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
      return;
    }
    console.log(`🚀 GQL server ready at https://hunsaker-author-website-development.up.railway.app/graphql`)
  })
  
}

initServer();

// // npm install @apollo/server express graphql cors body-parser
// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
// import express from 'express';
// import http from 'http';
// import cors from 'cors';
// // import { json } from 'body-parser';
// import { typeDefs, resolvers } from './schema';
// // import { typeDefs } from './schema/typeDefs';
// conimport { http } from 'http';


// const app = express();
// const httpServer = http.createServer(app);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });
// await server.start();
// app.use(
//   '/graphql',
//   cors(),
//   json(),
//   expressMiddleware(server, {
//     context: async ({ req }) => ({ token: req.headers.token }),
//   }),
// );

// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
// console.log(`🚀 Server ready at http://localhost:4000/graphql`);