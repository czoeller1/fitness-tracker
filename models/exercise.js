const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Enter an exercise type",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise",
  },

  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
