const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let posts = [];
let nextId = 1;

app.get("/posts", (_, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = nextId++;
  const { title } = req.body;
  posts = [...posts, { title, id }];
  res.status(201).send(posts);
});

app.listen(4000, () => {
  console.log("listening on PORT 4000");
});
