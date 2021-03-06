/* eslint-disable camelcase */
const db = require('../models');

const Preset = db.presets;

// Get all Presets with user_id like user_id
exports.getInfo = (req, res) => {
  const {
    user_id
  } = req.params;
  Preset.findAll({
    where: {
      user_id
    }
  }).then((data) => {
    const values = data.map((dbPreset) => dbPreset.dataValues);
    res.send(values);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || 'Some error occurred while getting Presets!',
    });
  });
};

// Get specific preset by id
exports.getPreset = (req, res) => {
  const id = req.params.preset_id;
  Preset.findByPk(id).then((data) => {
    res.send(data);
  });
};

// Create and Send a new Preset
exports.addPreset = (req, res) => {
    
  // Send Preset data to the database
  Preset.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
                    err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
};

exports.removePreset = async (req, res) => {
  const {
    id
  } = req.params;
  await Preset.destroy({
    where: {
      id,
    },
  });

  res.status(200).send({
    id
  });
};


exports.putPreset = (req, res) => {
  const { id } = req.params;
  Preset.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num[0] === 1) {
        res.send({
          message: 'Presets was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Presets with id=${id}. Maybe Preset was not found or req.body is empty!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating Preset with id=${id}`,
      });
    });
};
/* garbage?
exports.listAllSeatsInRoom = (req, res) => {
  Preset.findAll({ where: { id: 1 } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
                    err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
};

*/