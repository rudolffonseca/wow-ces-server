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

  type SignUpPayload {
    name: String
    email: String
    country_id: ID
    password: String
  }

  type AuthPayload {
    token: String
    customer: Customer
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
    message: String!
    read: Boolean
    Ticket: Ticket
    authorCustomer: Boolean
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
    ticketsByCustomer(cust_id: ID): [Ticket]
    messagesByTicket(ticket_id: ID): [Message]
    getTopics: [Topic]
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    signup(
      name: String!
      email: String!
      country_id: ID!
      password: String!
    ): SignUpPayload
    addMessage(
      message: String!
      authorCust: Boolean
      ticket_id: ID
      read: Boolean
    ): Message
    newTicket(
      customer_id: ID
      product_id: ID
      topic_id: ID
      status_id: ID
      message: String
      author: Boolean
    ): Ticket
  }
`;

module.exports = { typeDefs };
