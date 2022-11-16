const { request, response } = require("express");
const { MLprediction } = require("../AI/ml");
const { StudentModel } = require("../models/student.model");

const POSTPrediction = async (req = request, res = response) => {
  req.body.risk = 60;
  //const prediction= await MLprediction();
  const newStudent = new StudentModel(req.body);
  
  try {
    const savedStudent = await newStudent.save();
    res.send(`Student ${savedStudent.name} is saved successfully`)
  } catch (error) {
    res.send(error)
  }

};

const GETpredictions = async (req = request, res = response) => {
  const {generacion, orden} = req.params;
  
  try {
    // -1 => Descendente
    // 1 => Ascendente
    const students = await StudentModel.find({generation: generacion}).sort({risk: orden})
    res.send(students)
  } catch (error) {
    res.send(error)
  }

};


module.exports = {
  POSTPrediction,
  GETpredictions
};
