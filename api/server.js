const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const app = express()

const PORT = "3000"

app.get("/", (req, res)=> {
res.send("home page")
})

app.post("/api/tasks", async (req, res) => {
  console.log(req.body)
  res.send("Task created")
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

