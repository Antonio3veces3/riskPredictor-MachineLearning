const { request, response } = require("express");
const { MLprediction } = require("../AI/ml");
const { StudentModel } = require("../models/student.model");

const POSTPrediction = async (req = request, res = response) => {
  //const prediction= await MLprediction();
  const {answers} = req.body;
  let {Family, Scholar, SocioEco, Personal} = answers;
  let data = [];

  Object.values(Family).forEach(value=>{
    data.push(value);
  })
  Object.values(Scholar).forEach(value=>{
    data.push(value)
  })
  Object.values(SocioEco).forEach(value=>{
    data.push(value);
  })
  Object.values(Personal).forEach(value=>{
    data.push(value);
  })
  try {
    // const savedStudent = await newStudent.save();
    // res.send(`Student ${savedStudent.name} is saved successfully`)
    let prediction = await MLprediction(data);
    req.body.risk = 70;
    const newStudent = new StudentModel(req.body);
    res.json({
      prediction: parseFloat(prediction)
    })
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
