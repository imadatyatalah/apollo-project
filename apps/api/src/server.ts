import { ApolloServer } from "apollo-server";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { context } from "./context";

new ApolloServer({ typeDefs, resolvers, context })
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
