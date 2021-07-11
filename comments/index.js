const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const middlewares = [bodyParser.json(), cors()];
app.use(...middlewares);

let commentsByPostId = {};
let nextId = 1;

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = nextId++;
  const { comment } = req.body;
  const id = req.params.id;
  if (commentsByPostId[id]) {
    commentsByPostId[id] = [
      ...commentsByPostId[id],
      { comment, id: commentId },
    ];
  } else {
    commentsByPostId[id] = [{ comment, id: commentId }];
  }
  axios.post("http://localhost:5000/events", {
    type: "CommentCreated",
    event: { comment, id: commentId, postId: id },
  });
  res.status(201).send(commentsByPostId);
});

app.post("/events", (req, res) => {
  console.dir(req.body);
  res.status(201).send({ status: "OK" });
});

app.listen(4001, () => {
  console.log("listening on PORT 4001");
});
