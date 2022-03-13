const { dateScalar } = require("./scalars/dateScalar");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const { SALT_ROUNDS } = require("../config/constants");

const resolvers = {
  Date: dateScalar,
  Query: {
    countries: async (root, args, { db }, info) => {
      return db.Country.findAll({
        include: db.Customer,
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

  Mutation: {
    login: async (root, args, { db }, info) => {
      const customer = await db.Customer.findOne({
        where: {
          email: args.email,
        },
      });

      if (!customer) {
        throw new Error("User not found!");
      }

      const valid = bcrypt.compareSync(args.password, customer.password);

      if (!valid) {
        throw new Error("Invalid password!");
      }

      const token = toJWT(customer.id);

      return { token, customer };
    },

    signup: async (root, args, { db }, infor) => {
      const userCheck = await db.Customer.findOne({
        where: {
          email: args.email,
        },
      });

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
  },
};

module.exports = { resolvers };
