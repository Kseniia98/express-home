
module.exports.clientErrorHandler = async (err, req, res, next) => {
  if(err.status >= 400 && err.status < 500){
    const errorMessage = err.message;
    res.status(400).send({errors: [errorMessage]})
    return;
  }
  next(err);
}

module.exports.serverErrorHandler = async (err, req, res, next) => {
  res.status(500).send(`${500}: Server error`)
  return;
  
}