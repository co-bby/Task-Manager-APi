const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notfound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
//middleware
app.use(express.json());
app.use('/api/v1/tasks', tasks);

app.use(express.static('./public'));
app.use(notfound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
