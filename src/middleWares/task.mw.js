const createError = require('http-errors');
const yup = require('yup');

const createTaskSchema = yup.object().shape({
  body: yup.string().required(),
  isDone: yup.boolean().required(),
});

const updateTaskSchema = yup.object().shape({
  body: yup.string().notRequired().min(3),
  isDone: yup.boolean().required(),
});

const paramsTaskSchema = yup.number().required().positive().integer();


module.exports.createTaskMiddleWare = async(req, res, next) => {
  try{
    const data = req.body;
    const valid = await createTaskSchema.isValid(data);
    
    if(!valid){
      throw createError(400, 'Invalid data')
    }
      next();
    } catch (error){
      next(error);
    }
};

module.exports.updateTaskMiddleWare = async(req, res, next) => {
  try{
    const data = req.body;
    const valid = await updateTaskSchema.isValid(data);
    
    if(!valid){
      throw createError(400, 'Invalid data')
    }
      next();
    } catch (error){
      next(error);
    }
};

module.exports.paramsTaskMiddleWare = async(req, res, next) => {
  try {
    const data = Number(req.params.id);
    const valid = await paramsTaskSchema.isValid(data);

    if(!valid){
      throw createError(400, 'Invalid params')
    }
      next();
  } catch (error) {
    next(error);
  }
}