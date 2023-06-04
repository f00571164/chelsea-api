const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/player');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/chelseaDB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB'));

// Add a player
app.post('/players', async (req, res) => {
  const player = new Player({
    name: req.body.name,
    jerseyNumber: req.body.jerseyNumber,
    position: req.body.position
  });

  await player.save();
  res.send(player);
});

// Update a player
app.put('/players/:id', async (req, res) => {
  const player = await Player.findById(req.params.id);
  player.name = req.body.name;
  player.jerseyNumber = req.body.jerseyNumber;
  player.position = req.body.position;

  await player.save();
  res.send(player);
});

// Delete a player
app.delete('/players/:id', async (req, res) => {
  const player = await Player.findByIdAndRemove(req.params.id);
  res.send(player);
});

// Fetch player with most goals
app.get('/top-scorer', async (req, res) => {
  const player = await Player.findOne().sort('-goals');
  res.send(player);
});

// Fetch player with most assists
app.get('/top-assist', async (req, res) => {
  const player = await Player.findOne().sort('-assists');
  res.send(player);
});

// Fetch players sorted by most to fewest red cards
app.get('/red-cards', async (req, res) => {
  const players = await Player.find().sort('-redCards');
  res.send(players);
});

// Fetch player with most penalty goals
app.get('/penalty-goals', async (req, res) => {
  const player = await Player.findOne().sort('-penaltyGoals');
  res.send(player);
});

// Fetch players sorted from fewest to most assists
app.get('/least-assists', async (req, res) => {
  const players = await Player.find().sort('assists');
  res.send(players);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port ' + port));
