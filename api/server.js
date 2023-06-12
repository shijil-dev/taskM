const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const app = express()
const Task = require("./model/taskModel.js")
const PORT = "3000"

//middleware
/*const logger = (req, res, next) => {
  console.log("middleware ran")
  next()
}*/
app.use(express.json())

app.get("/", (req, res)=> {
res.send("home page")
})

app.post("/api/tasks", async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch(error){
    res.status(500).json({msg: error.message})
  }
})

mongoose
  .connect(process.env.MODB_URI)
  .then( () => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`)
    })
  }
  )
  .catch((err) => console.log(err))

