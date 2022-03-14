const { dateScalar } = require("./scalars/dateScalar");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const { SALT_ROUNDS } = require("../config/constants");

const resolvers = {
  Date: dateScalar,
  Query: {
    // countries: async (root, args, { db }, info) => {
    //   return db.Country.findAll({
    //     include: db.Customer,
    //   });
    // },
    ticketsByCustomer: async (root, args, { db }, info) => {
      return db.Ticket.findAll({
        where: {
          customer_id: args.cust_id,
        },
        include: [db.Message, db.Topic, db.Status],
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
  },
};

module.exports = { resolvers };
