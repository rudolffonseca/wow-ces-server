const { dateScalar } = require("./scalars/dateScalar");

const resolvers = {
  Date: dateScalar,

  Query: {
    allCountries: async (root, args, { db }, info) => {
      return db.Country.findAll();
    },
  },
};

module.exports = { resolvers };
