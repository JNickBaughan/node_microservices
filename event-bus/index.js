const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { getServiceUrls } = require("../constants");

const app = express();
app.use(bodyParser.json());

const services = Object.values(getServiceUrls(process.env.NODE_ENV));

app.post("/events", (req, res) => {
  const event = req.body;
  services.forEach((service) => {
    axios.post(`${service}/events`, event);
  });
  res.status(200).send({ status: "OK" });
});

app.get("/", () => {
  console.dir(services);
});

app.listen(5000, () => {
  console.log(`event bus listening on PORT 5000`);
});
