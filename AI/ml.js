const brain = require("brain.js");

const MLprediction = async (data) => {
  const config = {
    binaryThresh: 0.01,
    hiddenLayers: [6],
    decayRate: 0.99,
  };

  const net = new brain.NeuralNetwork(config);

  const configTraining = {
    //iterations: 2,
    //log: true,
    errorThresh: 0.0001,
    /*callback: (status)=>{
            console.log(status);
        }*/
  };

  net.train(
    [
      // ALTO RIESGO
      {
        input: [
          1, 0.2, 0.2, 0.2, 1, 0.2, 1, 0.2, 1, 0.2, 0.2, 1, 0.2, 1, 0.2, 1, 0.2,
          0.2, 0.2, 0.2, 1, 0.8, 0.6, 1, 0.2, 0.2, 1, 0.2, 0.2, 1, 1, 1, 0.2, 1,
          1, 1, 0.2, 0.8, 1, 1,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          1, 0.4, 0.4, 0.4, 0.8, 0.4, 0.8, 0.4, 0.8, 0.4, 0.2, 1, 0.2, 0.8, 0.2,
          1, 0.4, 0.2, 0.2, 0.4, 0.8, 1, 1, 1, 0.2, 0.2, 0.8, 0.2, 0.2, 0.8,
          0.8, 0.8, 0.4, 0.8, 0.8, 0.8, 0.2, 1, 1, 0.8,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.8, 0.2, 0.4, 0.2, 1, 0.2, 1, 0.2, 1, 0.4, 0.4, 0.8, 0.4, 0.8, 0.4,
          0.8, 0.4, 0.4, 0.4, 0.2, 1, 0.8, 0.8, 1, 0.4, 0.4, 0.8, 0.6, 0.4, 1,
          1, 0.8, 0.6, 1, 0.8, 0.8, 0.2, 0.8, 1, 0.6,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.6, 0.2, 0.2, 0.2, 0.6, 0.2, 0.6, 0.2, 0.6, 0.2, 0.4, 0.8, 0.4, 1,
          0.2, 0.8, 0.2, 0.2, 0.6, 0.6, 0.8, 0.6, 0.8, 0.8, 0.6, 0.4, 1, 0.4,
          0.4, 0.8, 0.8, 1, 0.6, 1, 1, 1, 0.4, 1, 0.8, 0.8,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.2, 0.4, 0.2, 0.4, 0.6, 0.4, 0.8, 0.2, 0.6, 0.4, 0.4, 0.6, 0.2, 1,
          0.2, 1, 0.6, 0.6, 0.2, 0.4, 1, 1, 0.6, 0.6, 0.2, 0.2, 1, 0.6, 0.6,
          0.8, 1, 1, 0.4, 0.8, 1, 1, 0.4, 0.8, 0.8, 0.8,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.4, 0.4, 0.4, 0.2, 1, 0.2, 1, 0.4, 1, 0.2, 0.4, 1, 0.4, 0.8, 0.4,
          0.6, 0.2, 0.4, 0.4, 0.2, 0.8, 1, 1, 0.8, 0.4, 0.6, 0.8, 0.2, 0.2, 1,
          0.8, 0.6, 0.2, 0.8, 1, 1, 0.2, 1, 0.8, 0.6,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.6, 0.2, 0.2, 0.4, 0.6, 0.2, 0.8, 0.2, 1, 0.2, 0.6, 0.6, 0.6, 1, 0.6,
          0.8, 0.4, 0.6, 0.4, 0.4, 0.8, 0.8, 1, 0.8, 0.6, 0.4, 1, 0.4, 0.2, 0.6,
          0.8, 0.8, 0.4, 1, 1, 0.8, 0.4, 1, 1, 0.8,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.8, 0.2, 0.4, 0.4, 1, 0.2, 0.8, 0.2, 0.6, 0.4, 0.8, 1, 0.4, 0.8, 0.4,
          0.4, 0.4, 0.2, 0.6, 0.4, 1, 1, 1, 1, 0.2, 0.2, 0.8, 0.4, 0.6, 1, 1,
          0.8, 0.2, 0.8, 0.8, 0.8, 0.4, 0.8, 0.8, 0.6,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.6, 0.4, 0.2, 0.2, 0.8, 0.4, 1, 0.6, 0.6, 0.4, 1, 0.8, 0.4, 0.6, 0.2,
          0.2, 0.2, 0.2, 0.8, 0.6, 1, 0.8, 0.8, 0.8, 0.6, 0.6, 0.8, 0.2, 0.4,
          0.8, 1, 1, 0.4, 0.8, 0.8, 1, 0.2, 0.8, 0.8, 1,
        ],
        output: { highRisk: 1 },
      },
      {
        input: [
          0.4, 0.2, 0.4, 0.6, 0.6, 0.6, 0.8, 0.4, 0.6, 0.2, 1, 1, 0.4, 1, 0.4,
          0.2, 0.2, 0.2, 0.4, 0.2, 0.8, 1, 0.6, 0.8, 0.6, 0.2, 0.6, 0.2, 0.4,
          0.6, 1, 1, 0.4, 1, 0.8, 0.8, 0.2, 0.8, 1, 1,
        ],
        output: { highRisk: 1 },
      },

      // BAJO RIESGO
      {
        input: [
          0.2, 1, 1, 1, 0.2, 1, 0.2, 1, 0.2, 1, 1, 0.2, 1, 0.2, 1, 0.2, 1, 1, 1,
          1, 0.2, 0.2, 0.2, 0.2, 1, 1, 0.2, 1, 1, 0.2, 0.2, 0.2, 1, 0.2, 0.2,
          0.2, 1, 0.2, 0.2, 0.2,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.4, 0.8, 1, 1, 0.2, 0.8, 0.2, 1, 0.2, 1, 1, 0.4, 1, 0.4, 1, 0.4, 0.8,
          1, 1, 1, 0.2, 0.4, 0.4, 0.4, 1, 1, 0.2, 1, 1, 0.2, 0.2, 0.4, 1, 0.2,
          0.4, 0.2, 0.8, 0.4, 0.4, 0.2,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.2, 0.8, 1, 1, 0.4, 0.8, 0.4, 0.8, 0.4, 0.8, 1, 0.2, 0.8, 0.4, 0.8,
          0.2, 1, 0.8, 1, 1, 0.4, 0.2, 0.2, 0.2, 0.6, 0.8, 0.2, 0.6, 1, 0.4,
          0.4, 0.2, 0.8, 0.4, 0.2, 0.2, 1, 0.4, 0.2, 0.2,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.4, 1, 0.8, 0.8, 0.4, 1, 0.6, 1, 0.4, 0.8, 0.8, 0.2, 0.8, 0.2, 0.8,
          0.4, 1, 1, 0.8, 0.8, 0.2, 0.4, 0.2, 0.4, 0.8, 0.8, 0.4, 0.8, 0.8, 0.2,
          0.4, 0.4, 0.8, 0.4, 0.2, 0.4, 0.8, 0.4, 0.2, 0.2,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.2, 1, 1, 1, 0.6, 1, 0.2, 0.8, 0.2, 1, 0.8, 0.4, 1, 0.2, 0.8, 0.2,
          0.8, 0.8, 0.8, 0.8, 0.4, 0.2, 0.2, 0.4, 0.8, 1, 0.2, 0.8, 1, 0.4, 0.2,
          0.2, 1, 0.2, 0.4, 0.2, 0.8, 0.2, 0.4, 0.2,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.4, 0.8, 0.8, 1, 0.6, 0.8, 0.6, 1, 0.2, 1, 0.8, 0.2, 0.8, 0.4, 0.8,
          0.4, 0.8, 1, 1, 0.8, 0.4, 0.2, 0.4, 0.2, 0.6, 0.6, 0.4, 0.6, 0.8, 0.2,
          0.2, 0.4, 1, 0.4, 0.4, 0.2, 1, 0.2, 0.4, 0.4,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.2, 1, 0.8, 0.8, 0.4, 1, 0.4, 1, 0.4, 1, 1, 0.4, 1, 0.4, 1, 0.2, 1,
          0.8, 0.8, 0.8, 0.2, 0.4, 0.4, 0.2, 1, 1, 0.4, 0.6, 1, 0.2, 0.4, 0.2,
          1, 0.4, 0.2, 0.4, 1, 0.4, 0.2, 0.2,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.2, 1, 1, 0.8, 0.4, 0.8, 0.4, 0.8, 0.2, 0.8, 0.8, 0.4, 1, 0.2, 0.6,
          0.4, 1, 0.8, 1, 0.8, 0.2, 0.2, 0.4, 0.4, 0.8, 0.8, 0.4, 1, 1, 0.2,
          0.2, 0.4, 0.8, 0.4, 0.2, 0.4, 1, 0.4, 0.2, 0.4,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.2, 0.8, 1, 1, 0.2, 1, 0.2, 0.8, 0.2, 1, 1, 0.2, 1, 0.2, 1, 0.2, 0.8,
          1, 0.8, 0.8, 0.4, 0.4, 0.2, 0.2, 0.8, 0.8, 0.2, 1, 0.8, 0.4, 0.4, 0.4,
          0.8, 0.2, 0.2, 0.4, 0.8, 0.4, 0.2, 0.4,
        ],
        output: { lowRisk: 1 },
      },
      {
        input: [
          0.4, 1, 1, 1, 0.4, 1, 0.4, 1, 0.4, 0.8, 0.8, 0.2, 0.8, 0.2, 0.8, 0.4,
          1, 0.8, 0.6, 1, 0.2, 0.4, 0.2, 0.6, 0.6, 1, 0.4, 0.8, 0.8, 0.2, 0.4,
          0.2, 1, 0.2, 0.4, 0.4, 1, 0.2, 0.2, 0.4,
        ],
        output: { lowRisk: 1 },
      },
    ],
    configTraining
  );

  let { highRisk } = await net.run(data);
  console.log(highRisk);
  return parseFloat(highRisk * 100).toFixed(2);
};

module.exports = {
  MLprediction,
};

/*
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
*/
