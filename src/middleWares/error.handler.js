
module.exports.clientErrorHandler = async (err, req, res, next) => {
  if(err.status >= 400 && err.status < 500){
    const errorMessage = err.message;
    res.status(400).send({errors: [errorMessage]})
    return;
  }
  next(err);
}