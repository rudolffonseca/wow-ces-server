const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");
const cors = require("cors");
const countriesRouter = require("./routers/countries");
const loginRouter = require("./routers/login");
const authMiddleware = require("./auth/middleWare");

const { typeDefs } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");

async function startApolloServer(typeDefs, resolvers) {
  const db = require("./models");
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => ({ req, db }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  app.use(cors());
  app.use(express.json());
  app.use("/countries", countriesRouter);
  app.use("/login", loginRouter);
  // app.use(authMiddleware);
  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, console.log("on 4000"));
  // await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
