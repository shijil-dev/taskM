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
    const tasks = await Task.find(req.body)
    res.status(200).json(tasks)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
  }
}
//get a single task with id params
const getTask = async (req, res) => {
  {
  try{
    const {id} = req.params
    const task = await Task.findById(id)
    if ( !task ){
        return res.status(404).json(`no task with id ${id}`)
      }
    res.status(200).json(task)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
  }
}
//delete a task
const deleteTask = async (req, res) => {
  {
  try{
    const {id} = req.params
    const task = await Task.findByIdAndDelete(id)
    if ( !task ){
        return res.status(404).json(`no task with id ${id}`)
      }
    res.status(200).send(`deleted id ${id}`)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
  }
}

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
}
