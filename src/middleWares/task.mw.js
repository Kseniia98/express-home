const createError = require('http-errors');
const yup = require('yup');

const createTaskSchema = yup.object().shape({
  body: yup.string().required(),
  isDone: yup.boolean().required(),
})

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