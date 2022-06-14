const getHome = (req, res) => {
  console.log(req.params.id);
  res.status(200).send({id: req.params.id})
};

module.exports.getHome = getHome;