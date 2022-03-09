const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Country {
    id: ID!
    code: String
    name: String
    region: String
    Customers: [Customer]
    createdAt: Date
    updatedAt: Date
  }

  type Customer {
    id: ID!
    name: String
    email: String
    Tickets: [Ticket]
    Country: Country
    createdAt: Date
    updatedAt: Date
  }

  type Access_level {
    id: ID
    title: String
    Associates: [Associate]
    createdAt: Date
    updatedAt: Date
  }

  type Associate {
    id: ID
    name: String
    email: String
    Access_level: Access_level
    Tickets: [Ticket]
    createdAt: Date
    updatedAt: Date
  }

  type Message {
    id: ID
    message: String
    read: Boolean
    Ticket: Ticket
    createdAt: Date
    updatedAt: Date
  }

  type Product {
    id: ID
    name: String
    serial: String
    Tickets: [Ticket]!
    createdAt: Date
    updatedAt: Date
  }

  type Topic {
    id: ID
    title: String
    Tickets: [Ticket]
    createdAt: Date
    updatedAt: Date
  }

  type Status {
    id: ID
    title: String
    Tickets: [Ticket]
    createdAt: Date
    updatedAt: Date
  }

  type Ticket {
    id: ID
    Customer: Customer
    Product: Product
    Topic: Topic
    Messages: [Message]
    Associate: Associate
    Status: Status
    closedAt: Date
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    countries: [Country]
    customers: [Customer]
    access_level: [Access_level]
    associates: [Associate]
    messages: [Message]
    products: [Product]
    topics: [Topic]
    status: [Status]
    tickets: [Ticket]
  }
`;

module.exports = { typeDefs };
