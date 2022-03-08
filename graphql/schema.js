const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Country {
    id: ID
    code: String
    name: String
    region: String
  }

  type Query {
    allCountries: [Country]
  }
`;

module.exports = { typeDefs };
