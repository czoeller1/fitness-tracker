const db = require("../models/models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((data) => {
      console.log(data);
      res.json(data);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )

      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((workout) => res.json(workout));
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .limit(7)
      .then((workouts) => {
        //console.log(workouts);

        res.json(workouts);
      });
  });
};
