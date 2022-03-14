const { Router } = require("express");
const router = new Router();
const Country = require("../models/").Country;

router.get("/", async (req, res, nxt) => {
  try {
    const countries = await Country.findAll();
    res.status(200).send(countries);
  } catch (error) {
    console.log(error.message);
    nxt(error);
  }
});

module.exports = router;
