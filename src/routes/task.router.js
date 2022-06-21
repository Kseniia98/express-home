const express = require("express");
const TaskController = require("../controllers/task.contr");
const { createTaskMiddleWare, updateTaskMiddleWare, paramsTaskMiddleWare } = require("../middleWares/task.mw");

const taskRouter = express.Router();

taskRouter.get('/:id/get', paramsTaskMiddleWare, TaskController.getTask);
taskRouter.delete('/:id', paramsTaskMiddleWare, TaskController.deleteTask);

taskRouter.post('/create', createTaskMiddleWare,  TaskController.createTask);
taskRouter.patch('/:id', updateTaskMiddleWare, TaskController.updateTask);

module.exports = taskRouter;
