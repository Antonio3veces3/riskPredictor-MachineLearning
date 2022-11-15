const { request, response } = require("express");
const { MLprediction } = require("../AI/ml");

const getPrediction = async (req = request, res = response) => {
  //const prediction= await MLprediction();

  res.send(req.body)

};


module.exports = {
  getPrediction,
};
