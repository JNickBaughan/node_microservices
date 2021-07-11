const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const services = [
  "http://localhost:4000", //posts
  "http://localhost:4001", //comments
];

app.post("/events", (req, res) => {
  const event = req.body;
  services.forEach((service) => {
    axios.post(`${service}/events`, event);
  });
  res.status(200).send({ status: "OK" });
});

app.listen(5000, () => {
  console.log(`event bus listening on PORT 5000`);
});
