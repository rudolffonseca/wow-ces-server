const { dateScalar } = require("./scalars/dateScalar");

const resolvers = {
  Date: dateScalar,

  Query: {
    countries: async (root, args, { db }, info) => {
      return db.Country.findAll({
        include: [db.Customer],
      });
    },
    customers: async (root, args, { db }, info) => {
      return db.Customer.findAll({
        include: [db.Country, db.Ticket],
      });
    },
    access_level: async (root, args, { db }, info) => {
      return db.Access_level.findAll({
        include: db.Associate,
      });
    },
    associates: async (root, args, { db }, info) => {
      return db.Associate.findAll({
        include: [db.Access_level, db.Ticket],
      });
    },
    messages: async (root, args, { db }, info) => {
      return db.Message.findAll({
        include: db.Ticket,
      });
    },
    products: async (root, args, { db }, info) => {
      return db.Product.findAll({
        include: db.Ticket,
      });
    },
    topics: async (root, args, { db }, info) => {
      return db.Topic.findAll({
        include: db.Ticket,
      });
    },
    status: async (root, args, { db }, info) => {
      return db.Status.findAll({
        include: db.Ticket,
      });
    },
    tickets: async (root, args, { db }, info) => {
      return db.Ticket.findAll({
        include: [
          db.Message,
          db.Product,
          db.Customer,
          db.Associate,
          db.Topic,
          db.Status,
        ],
      });
    },
  },
};

module.exports = { resolvers };
