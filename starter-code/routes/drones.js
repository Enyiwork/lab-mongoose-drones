const express = require('express');

// require the Drone model here
const DroneModel = require("../models/drone");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel
  .find()
  .limit(25)
  .sort({ dateAdded: -1})
  .exec()
  .then((droneResult) => {
    res.locals.listOfDrones = droneResult;
    res.render("drones/drone-list");

  })
  .catch((err) => {

    next(err);

  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/drone-form");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel({
  droneName:       req.body.droneName,
  propellers: req.body.dronePropellers,
  maxSpeed:   req.body.droneSpeed,

  });
  theDrone.save()
  .then(() => {
    res.redirect("/drones");
  })
  .catch((err) => {
    console.log("Drone ERROR");
    console.log(err);
   });
  });



module.exports = router;
