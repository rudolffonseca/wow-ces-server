const { dateScalar } = require("./scalars/dateScalar");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const { SALT_ROUNDS } = require("../config/constants");

const resolvers = {
  Date: dateScalar,
  Query: {
    ticketsByCustomer: async (root, args, { db }) => {
      return db.Ticket.findAll({
        where: {
          customer_id: args.cust_id,
        },
        include: [db.Message, db.Topic, db.Status, db.Product],
      });
    },
    messagesByTicket: async (root, args, { db }) => {
      return db.Message.findAll({
        where: {
          ticket_id: args.ticket_id,
        },
        order: [["createdAt", "ASC"]],
      });
    },
    getTopics: async (root, args, { db }) => {
      return db.Topic.findAll({
        include: [db.Ticket],
        order: [["title", "ASC"]],
      });
    },
    getProducts: async (root, args, { db }, info) => {
      return db.Product.findAll({
        order: [["name", "ASC"]],
      });
    },
  },

  Mutation: {
    signup: async (root, args, { db }) => {
      const userCheck = await db.Customer.findOne({
        where: {
          email: args.email,
        },
      });
      //FIXME: even I throw a new error, the response status is 200.
      if (userCheck) {
        throw new Error("Email already registered!");
      } else {
        const newCustomer = await db.Customer.create({
          name: args.name,
          email: args.email,
          country_id: parseInt(args.country_id),
          password: bcrypt.hashSync(args.password, SALT_ROUNDS),
        });
        delete newCustomer.dataValues.password;
        return newCustomer;
      }
    },
    addMessage: async (root, args, { db }) => {
      return db.Message.create({
        message: args.message,
        ticket_id: args.ticket_id,
        read: args.read,
        authorCustomer: args.authorCust,
      });
    },
    newTicket: async (root, args, { db }, info) => {
      const { customer_id, product_id, topic_id, message } = args;
      const newTicket = await db.Ticket.create({
        customer_id,
        product_id,
        topic_id,
      });

      console.log("newTicket:", newTicket);

      const newMessage = await db.Message.create({
        message,
        ticket_id: newTicket.id,
        authorCustomer: true,
      });

      return newTicket;
    },
  },
};

module.exports = { resolvers };
