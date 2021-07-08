const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

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
  res.status(201).send(commentsByPostId);
});

app.listen(4001, () => {
  console.log("listening on PORT 4001");
});
