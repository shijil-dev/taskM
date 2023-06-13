const Task = require("../model/taskModel.js")
//create task controller
const createTask = async (req, res) => {
  {
  try{
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
  }
}
//get tasks controller
const getTasks = async (req, res) => {
  {
  try{
    const task = await Task.find(req.body)
    res.status(200).json(task)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
  }
}


module.exports = {
  createTask,
  getTasks
}