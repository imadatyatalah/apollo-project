import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    name: String!
    email: String!
    username: String!
    profile: Profile!
  }

  type Profile {
    avatarUrl: String!
  }

  scalar DateTime

  type Query {
    userByUsername(username: String): User!
  }
`;
