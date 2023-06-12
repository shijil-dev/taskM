const express = require("express")
const Task = require("../model/taskModel.js")
const routes = express.Router()

//create a task
routes.post("/api/tasks", async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
})

//get tasks from db
routes.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
})



module.exports = routes
