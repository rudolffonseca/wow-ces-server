const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const { Router } = require("express");
const router = new Router();
const { Customer } = require("../models");

router.post("/", async (req, res, nxt) => {
  const { name, email, country_id, password } = req.body;
  try {
    const newCustomer = await Customer.create({
      name,
      email,
      country_id,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });
    res.status(200).send({ user_id: newCustomer.id });
  } catch (error) {
    console.log(error.message);
    nxt(error);
  }
});

module.exports = router;
