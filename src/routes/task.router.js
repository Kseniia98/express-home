const express = require("express");
const TaskController = require("../controllers/task.contr");
const { middleWare } = require("../middleWares");

const taskRouter = express.Router();

taskRouter.get('/:id/get', middleWare, TaskController.getTask);
taskRouter.delete('/:id', TaskController.deleteTask);

taskRouter.post('/', TaskController.createTask);
taskRouter.patch('/', TaskController.updateTask);

module.exports = taskRouter;
