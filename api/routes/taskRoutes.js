const express = require("express")
const { getTasks , createTask ,getTask } = require("../controllers/taskController.js")
const routes = express.Router()

routes.post("/api/tasks", createTask)

routes.get("/api/tasks", getTasks)

routes.get("/api/tasks/:id",getTask)

module.exports = routes
