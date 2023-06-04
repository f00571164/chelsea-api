const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  goals: {
    type: Number,
    default: 0
  },
  assists: {
    type: Number,
    default: 0
  },
  redCards: {
    type: Number,
    default: 0
  },
  penaltyGoals: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
