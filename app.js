require("./DB/connect")

const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
//middleware
app.use("/api/v1/tasks", tasks)
app.use(express.static("./public"))
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("hello world")
})

const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`))
