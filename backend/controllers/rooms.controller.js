const db = require('../models');

const Room = db.rooms;

// Retrieve all Tutorials from the database.
exports.getAll = (req, res) => {
  Room.findAll().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || 'Some error occurred while getting Rooms!',
    });
  });
};
