const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const middlewares = [bodyParser.json(), cors()];
app.use(...middlewares);

let posts = {};

app.get("/posts", (_, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, event } = req.body;
  if (type === "PostCreated") {
    posts[event.id] = { ...event, comments: [] };
  }
  if (type === "CommentCreated" && posts[event.postId]) {
    posts[event.postId] = {
      ...posts[event.postId],
      comments: [...posts[event.postId].comments, event],
    };
  }

  res.status(201).send({ status: "OK" });
});

app.listen(4002, () => {
  console.log("listening on PORT 4002");
});
