const express = require("express")
const { getTasks , createTask } = require("../controllers/taskController.js")
const routes = express.Router()

routes.post("/api/tasks", createTask)

routes.get("/api/tasks", getTasks)


module.exports = routes
