const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()
//middleware
app.use("/api/v1/tasks", tasks)
app.use(express.static("./public"))
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("hello world")
})

const port = 3000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
