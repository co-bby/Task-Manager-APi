const express = require("express");
const router = express.Router();
const {
  getAlltasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasks");

router.route("/").get(getAlltasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
module.exports = router;
