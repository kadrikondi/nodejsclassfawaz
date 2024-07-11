// app.js

import express from "express";

// create a new express application instance
const app = express();

const posts = [
  {
    id: 1,
    author: "Alice Johnson",
    body: "This is a dummy post by Alice.",
  },
  {
    id: 2,
    author: "Bob Smith",
    body: "Bob has written this dummy post.",
  },
  {
    id: 3,
    author: "Charlie Brown",
    body: "Charlie shares his thoughts in this post.",
  },
  {
    id: 4,
    author: "Diana Prince",
    body: "Diana's dummy post about various topics.",
  },
  {
    id: 5,
    author: "Ethan Hunt",
    body: "Ethan writes about his adventures.",
  },
  {
    id: 6,
    author: "Fiona Gallagher",
    body: "Fiona's insights and observations.",
  },
  {
    id: 7,
    author: "George Martin",
    body: "George shares a fictional story in this post.",
  },
  {
    id: 8,
    author: "Hannah Davis",
    body: "Hannah's post about her daily life.",
  },
  {
    id: 9,
    author: "Ian Wright",
    body: "Ian discusses current events in his post.",
  },
  {
    id: 10,
    author: "Julia Roberts",
    body: "Julia writes about her travel experiences.",
  },
];

const port = 8000;

// home route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Nodejs</h1>`);
});
// login route
app.get("/login", (req, res) => {
  res.send(`<h1 style="background-color: red">Login Page</h1>`);
});
// get all post from api

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

//
// get single data
app.get("/api/post/:id", (req, res) => {
  console.log(req.params.id);
  // const id = req.params.id;
  const id = parseInt(req.params.id);
  //   res.json(posts.filter((post) => post.id == id));

  const postrest = posts.find((post) => post.id === id);
  if (!postrest) {
    res.status(400).json({ message: "post with such id not exist" });
  } else {
    res.status(200).json(postrest);
  }
});
// query

// get data base on query
app.get("/api/postsq", (req, res) => {
  //   console.log(req.query.limit + "fffffff");
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
