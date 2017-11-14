// Iteration #1
require("../config/mongoose-setup");

const DroneModel = require("../models/drone");


const droneInfo = [
  {
    droneName: "D1000",
    propellers: 6,
    maxSpeed: 18
  },
  {
    droneName: "Mr. Marcos",
    propellers: 4,
    maxSpeed: 14
  },
  {
    droneName: "Mr. Robert",
    propellers: 2,
    maxSpeed: 20
  }
];


DroneModel.create(droneInfo)
  .then((droneResult) => {
    console.log("inserted ${droneResult.length} drones");
  })
  .catch((err) => {
    console.log("Drone insert ERROR!");
    console.log(err);
  });
