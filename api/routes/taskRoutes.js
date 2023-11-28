const express = require("express");
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController.js");
const routes = express.Router();

routes.post("/", createTask);

routes.get("/", getTasks);

routes.get("/:id", getTask);

routes.delete("/:id", deleteTask);

routes.put("/:id", updateTask);

module.exports = routes;
