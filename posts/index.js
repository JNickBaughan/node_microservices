const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const { getEventBusUrl } = require("../constants");
const eventBusUrl = getEventBusUrl();

const app = express();
const middlewares = [bodyParser.json(), cors()];
app.use(...middlewares);

let posts = [];
let nextId = 1;

app.get("/posts", (_, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = nextId++;
  const { title } = req.body;
  posts = [...posts, { title, id }];

  axios.post(`${eventBusUrl}/events`, {
    type: "PostCreated",
    event: {
      id,
      title,
    },
  });
  res.status(201).send(posts);
});

app.post("/events", (req, res) => {
  console.dir(req.body);
  res.status(201).send({ status: "OK" });
});

app.listen(4000, () => {
  console.log("listening on PORT 4000");
});
