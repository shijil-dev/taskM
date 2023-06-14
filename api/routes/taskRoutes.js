const express = require("express")
const { getTasks , createTask, getTask, deleteTask } = require("../controllers/taskController.js")
const routes = express.Router()

routes.post("/api/tasks", createTask)

routes.get("/api/tasks", getTasks)

routes.get("/api/tasks/:id",getTask)

routes.delete("/api/tasks/:id", deleteTask)

module.exports = routes
