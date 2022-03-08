// import { ApolloServer, gql } from "apollo-server-express";
// import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
// import express from "express";
// import http from "http";
// import cors from "cors";

const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");
const cors = require("cors");

const typeDefs = gql`
  type User {
    id: Int
    email: String
  }

  type Query {
    users: [User]
  }
`;

const users = [
  {
    id: 1,
    email: "ru@ru",
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  app.use(cors());
  app.use(express.json());
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
