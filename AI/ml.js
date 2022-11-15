const brain = require('brain.js');

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
  
  net.train([
    //NO PAGARAN
    { input: { S: 0.0125, C: 0.06, M: 0.08333333 }, output: { No_pagara: 1 } },
    { input: { S: 0.1, C: 0.3, M: 0.333333333 }, output: { No_pagara: 1 } },
    { input: { S: 0.5, C: 0.3, M: 1 }, output: { No_pagara: 1 } },
    { input: { S: 0.15, C: 1.0, M: 0.666666667 }, output: { No_pagara: 1 } },
    { input: { S: 0.125, C: 0.2, M: 0.3333 }, output: { No_pagara: 1 } },
    { input: { S: 0.5, C: 0.5, M: 0.66666667 }, output: { No_pagara: 1 } },
  
    // PAGARAN
    { input: { S: 0.375, C: 0.12, M: 0.333333333 }, output: { Pagara: 1 } },
    { input: { S: 0.5,   C: 0.2,  M: 0.666666667 }, output: { Pagara: 1 } },
    { input: { S: 0.875, C: 0.4,  M: 0.833333333 }, output: { Pagara: 1 } },
    { input: { S: 0.25,  C: 0.1,  M: 0.08333333  }, output: { Pagara: 1 } },
    { input: { S: 0.25,  C: 0.05, M: 0.083333333 }, output: { Pagara: 1 } },
  ],configTraining);
  
  //ALE
  //const output = net.run({S: 0.5, C: 0.3, M: 1});
  
  //MOM
  //const output = net.run({S: 0.125, C: 0.2, M: 0.3333});
  
  // PAP
  //const output = net.run({S: 0.25, C: 0.1, M: 0.08333333});
  
  //MEZ
  //const output = net.run({S: 0.5, C: 0.5, M: 0.66666667});
  
  // TIA CARMEN
  //const output = net.run({ S: 0.25, C: 0.05, M: 0.083333333 });
  
  //TONY
  // const output = net.run({ S: 0.75, C: 0.3, M: 0.5 });
  
  /*console.log(output);
  console.log("----------------------------------------------");
  console.log("No pagara %: " + output.No_pagara * 100);
  console.log("----------------------------------------------");
  console.log("Pagara %: " + output.Pagara * 100);*/

  const MLprediction = async ()=>{
    const output =  await net.run({S: 0.25, C: 0.1, M: 0.08333333});
    return output;
  }


  module.exports = {
    MLprediction
  }

  
