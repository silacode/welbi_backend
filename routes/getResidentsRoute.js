require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");

router.get("/residents", async (req, res) => {
  try {
    const response = await axios.get("https://welbi.org/api/residents", {
      params: {
        token: process.env.TOKEN,
      },
    });

    if (response.status === 200) res.status(201).send(response.data);
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
});

module.exports = router;
