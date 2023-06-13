const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const app = express()
const taskRoutes = require("./routes/taskRoutes.js")

const PORT = process.env.PORT

//middleware
/*const logger = (req, res, next) => {
  console.log("middleware ran")
  next()
}*/
app.use(express.json())
app.use(taskRoutes)

app.get("/", (req, res)=> {
res.send("home page")
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

