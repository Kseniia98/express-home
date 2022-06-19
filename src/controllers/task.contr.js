
const tasksDB = [];

class TaskController {

  getTask(req, res, next){
    try {
      console.log(req.params.id);
      res.status(200).send({id: req.params.id})
    } catch (error) {
      next(error)
    }
  };

  createTask(req, res, next){
    try {
      const task = { ...req.body };
      const newTask = {...task, taskId: tasksDB.length};''
      tasksDB.push(newTask)

      res.status(200).send({data: newTask})
    } catch (error) {
      next(error)
    }
  };

  updateTask(req, res, next){
    try {
      res.status(200).send({data: 'task'})
    } catch (error) {
      next(error)
    }
  };

  deleteTask(req, res, next){
    try {
      res.status(200).send({data: 'task'})
    } catch (error) {
      next(error)
    }
  };

};

module.exports = new TaskController();