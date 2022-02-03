const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://Cobby:nkum32eee@cluster0.9t7ho.mongodb.net/Task-Manager?retryWrites=true&w=majority"

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log(err))
