import { resolvers } from "./resolvers";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./gql";
import cors from "cors";
import express from "express";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const app = express();
app.use(cors({ origin: "https://myseoulguide.site", credentials: true }));
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
