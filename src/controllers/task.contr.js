const createError = require('http-errors');
const taskService = require('../services/taskService')

class TaskController {

  async getTask(req, res, next){
    try {
      console.log(req.params);
      const taskId = Number(req.params.id);
      const yourTask = await taskService.getTask(taskId);

      res.status(200).send({data: yourTask})
    } catch (error) {
      next(error)
    }
  };

  async createTask(req, res, next){
    try {
      const taskData = { 
        ...req.body, 
        body: req.body.body, 
        isDone: req.body.isDone
      };
      const newTask = await taskService.createTask(taskData);

      res.status(200).send({data: newTask})
    } catch (error) {
      next(error)
    }
  };

  async updateTask(req, res, next){
    try {
      const taskId = Number(req.params.id);
      const taskChange = req.body;
      const updatedTask = await taskService.updateTask(taskId, taskChange);

      res.status(200).send({data: updatedTask})
    } catch (error) {
      next(error)
    }
  };

  async deleteTask(req, res, next){
    try {
      const taskId = Number(req.params.id);
      await taskService.deleteTask(taskId);

      res.status(200).send({data: 'Deleted'})
    } catch (error) {
      next(error)
    }
  };

};

module.exports = new TaskController();