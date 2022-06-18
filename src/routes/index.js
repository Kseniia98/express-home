const express = require("express");
const taskRouter = require("./task.router");

const router = express.Router();

router.use('/tasks', taskRouter)

module.exports = router;