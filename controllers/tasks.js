const getAlltasks = (req, res) => {
  res.send("all tasks");
};
const createTask = (req, res) => {
  res.send("create task");
};
const getTask = (req, res) => {
  res.send("get single task");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = { getAlltasks, createTask, deleteTask, updateTask, getTask };