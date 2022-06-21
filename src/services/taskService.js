const createError = require("http-errors");

let nextID = 1;
const tasksDB = [{id: 0}];

module.exports.getTask = async(taskId) => {
  const index = tasksDB.findIndex(task => task.id === taskId);
  if(index === -1){
    throw createError(404, 'Task is not found')
  }
  const yourTask = tasksDB[index];

  return yourTask;
};

module.exports.createTask = async(data) => {
  const newTask = {...data, id: nextID++};
  tasksDB.push(newTask);

  return newTask;
};

module.exports.updateTask = async(taskId, taskChange) => {
  const index = tasksDB.findIndex(task => task.id === taskId);
  if(index === -1){
    throw createError(404, 'Task is not found')
  }
  const yourTask = tasksDB[index];

  const updatedTask = {
    ...yourTask, 
    body: taskChange.body, 
    isDone: taskChange.isDone,
    id: yourTask.id
  }
  tasksDB[index] = updatedTask;

  return updatedTask;
};

module.exports.deleteTask = async(taskId) => {
  const index = tasksDB.findIndex(task => task.id === taskId);
  if(index === -1){
    throw createError(404, 'Task is not found')
  }
  
  const deletedTask = tasksDB.splice(index, 1);
  console.log(tasksDB);
  return deletedTask;
}