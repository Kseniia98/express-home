
class TaskController {

  getTask(req, res){
    console.log(req.params.id);
    res.status(200).send({id: req.params.id})
  };

  createTask(req, res){
    const task = {name: 'Clean', isDone: false}
    res.status(200).send({data: task})
  };

  updateTask(req, res){
    res.status(200).send({data: 'task'})
  };

  deleteTask(req, res){
    res.status(200).send({data: 'task'})
  };

};

module.exports = new TaskController();