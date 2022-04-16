import { gql } from "apollo-server";

export const typeDefs = gql`
  type Employee {
    name: String!
    employeeHandle: String!
    profile: Profile
  }

  type Profile {
    bio: String
    location: String
    website: String
    position: String
    profileImage: String
  }

  type Query {
    employeeByHandle(handle: String): Employee
  }
`;
