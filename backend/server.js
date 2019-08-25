const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const todoRoutes = express.Router();

let Games = require("./todo.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud-redux", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB Connected Successfully");
});

// get all the Games
todoRoutes.route("/api/games").get(function(req, res) {
  Games.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, games: todos });
    }
  });
});

// get todo based on id
todoRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Games.findById(id, function(err, todo) {
    res.json({ todo });
  });
});

// add todo item to database
todoRoutes.route("/api/add").post(function(req, res) {
  let todo = new Games(req.body);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ games: "Game added successfully" });
    })
    .catch(err => {
      res.status(400).send("New Game item is not added");
    });
});

//update todo item based on id
todoRoutes.route("/update/:id").post(function(req, res) {
  Games.findById(req.params.id, function(err, todo) {
    if (!todo) {
      res.status(404).send("Data is not found");
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then(todo => {
          res.json("Todo Updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    errors: {
      global: "Still working on it"
    }
  });
});
app.use("/", todoRoutes);

app.listen(PORT, function() {
  console.log("server is running on port " + PORT);
});
